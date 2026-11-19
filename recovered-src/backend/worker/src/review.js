function reviewAllowed(auth, kind) {
	return kind === "claim" ? can(auth, "claims") : can(auth, "review");
}
async function reviewPayload(c) {
	const auth = c.get("auth");
	const { results } = await c.env.DB.prepare("SELECT s.*, u.username FROM submissions s LEFT JOIN users u ON u.id=s.user_id WHERE s.status='pending' ORDER BY s.id").all();
	const pending = [];
	for (const raw of results || []) {
		const sb = raw;
		if (!reviewAllowed(auth, String(sb.kind))) continue;
		let p = {};
		try {
			p = JSON.parse(String(sb.payload || "{}"));
		} catch {}
		pending.push({
			id: sb.id,
			kind: sb.kind,
			created: sb.created,
			username: sb.username,
			label: subLabel(String(sb.kind), p),
			name: p.name || p.title || p.company || "",
			summary: p.summary || p.intro || "",
			payload: p
		});
	}
	let comments = [];
	if (can(auth, "review")) try {
		comments = (await c.env.DB.prepare("SELECT c.*, u.username AS uname, rec.name AS rname, rec.slug AS rslug FROM comments c LEFT JOIN users u ON u.id=c.user_id JOIN records rec ON rec.id=c.record_id WHERE c.status='pending' ORDER BY c.id").all()).results || [];
	} catch {}
	const decided = ((await c.env.DB.prepare("SELECT s.*, u.username FROM submissions s LEFT JOIN users u ON u.id=s.user_id WHERE s.status IN ('approved','rejected') ORDER BY s.decided DESC LIMIT 20").all()).results || []).map((raw) => {
		const d = raw;
		let p = {};
		try {
			p = JSON.parse(String(d.payload || "{}"));
		} catch {}
		return {
			id: d.id,
			kind: d.kind,
			status: d.status,
			decided: d.decided,
			username: d.username,
			note: d.note,
			label: subLabel(String(d.kind), p),
			name: p.name || p.title || p.company || ""
		};
	});
	return {
		pending,
		comments,
		decided
	};
}
async function postReview(c, sid) {
	const auth = c.get("auth");
	const g = await readBody(c);
	const sb = await c.env.DB.prepare("SELECT * FROM submissions WHERE id=? AND status='pending'").bind(Number(sid)).first();
	if (!sb || !reviewAllowed(auth, String(sb.kind))) return c.json({ error: "Not found" }, 404);
	const note = (g.note || "").trim().slice(0, 500);
	if (g.action === "approve") try {
		const rid = await applySubmission(c.env.DB, sb);
		await setAuthor(c.env.DB, sb, rid);
		await c.env.DB.prepare("UPDATE submissions SET status='approved', note=?, decided=?, decided_by=?, result_id=? WHERE id=?").bind(note, nowStamp(), auth.user.id, rid, sb.id).run();
	} catch (ex) {
		const msg = ex instanceof Error ? ex.message : String(ex);
		await c.env.DB.prepare("UPDATE submissions SET status='rejected', note=?, decided=?, decided_by=? WHERE id=?").bind(`Could not apply: ${msg}`, nowStamp(), auth.user.id, sb.id).run();
	}
	else await c.env.DB.prepare("UPDATE submissions SET status='rejected', note=?, decided=?, decided_by=? WHERE id=?").bind(note, nowStamp(), auth.user.id, sb.id).run();
	return c.json({ ok: true });
}
async function postReviewComment(c, id) {
	if (!can(c.get("auth"), "review")) return c.json({ error: "Not found" }, 404);
	const status = (await readBody(c)).action === "approve" ? "approved" : "rejected";
	await c.env.DB.prepare("UPDATE comments SET status=? WHERE id=? AND status='pending'").bind(status, Number(id)).run();
	return c.json({ ok: true });
}
var typesSchema_default = {
	company: {
		"label": "Organisation",
		"fields": [
			{
				"key": "roles",
				"label": "Roles",
				"kind": "multi"
			},
			{
				"key": "country",
				"label": "Country",
				"kind": "text"
			},
			{
				"key": "founded",
				"label": "Founded",
				"kind": "year"
			},
			{
				"key": "stage",
				"label": "Stage",
				"kind": "select"
			},
			{
				"key": "employees",
				"label": "Employees",
				"kind": "number"
			},
			{
				"key": "locations",
				"label": "HQ and offices",
				"kind": "locations"
			},
			{
				"key": "open_to",
				"label": "Open to",
				"kind": "multi"
			},
			{
				"key": "open_note",
				"label": "What you're looking for",
				"kind": "longtext"
			},
			{
				"key": "website",
				"label": "Website",
				"kind": "url"
			},
			{
				"key": "careers",
				"label": "Careers page",
				"kind": "url"
			},
			{
				"key": "linkedin",
				"label": "LinkedIn",
				"kind": "url"
			},
			{
				"key": "x",
				"label": "X / Twitter",
				"kind": "url"
			},
			{
				"key": "github",
				"label": "GitHub",
				"kind": "url"
			},
			{
				"key": "huggingface",
				"label": "Hugging Face",
				"kind": "url"
			},
			{
				"key": "email",
				"label": "Contact email",
				"kind": "text"
			},
			{
				"key": "hw_chain",
				"label": "Assembly chain",
				"kind": "multi"
			},
			{
				"key": "components",
				"label": "Parts supplied",
				"kind": "multi"
			},
			{
				"key": "model_chain",
				"label": "Model chain",
				"kind": "multi"
			},
			{
				"key": "referral_status",
				"label": "Referral status",
				"kind": "select",
				"private": true
			},
			{
				"key": "referral_terms",
				"label": "Referral terms",
				"kind": "text",
				"private": true
			},
			{
				"key": "referral_contact",
				"label": "Referral contact",
				"kind": "text",
				"private": true
			},
			{
				"key": "agreement_ref",
				"label": "Agreement reference",
				"kind": "text",
				"private": true
			}
		],
		"relations": [
			{
				"key": "leaders",
				"label": "Leadership",
				"many": true
			},
			{
				"key": "partners",
				"label": "Partners",
				"many": true
			},
			{
				"key": "backed_by",
				"label": "Investors",
				"many": true
			},
			{
				"key": "sells_to",
				"label": "Customers",
				"many": true
			},
			{
				"key": "buys_from",
				"label": "Suppliers",
				"many": true
			},
			{
				"key": "highlights",
				"label": "Highlights",
				"many": true,
				"max": 3
			}
		]
	},
	university: {
		"label": "University",
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "country",
				"label": "Country",
				"kind": "text"
			},
			{
				"key": "city",
				"label": "City",
				"kind": "text"
			},
			{
				"key": "founded",
				"label": "Founded",
				"kind": "year"
			},
			{
				"key": "research_areas",
				"label": "Research areas",
				"kind": "multi"
			},
			{
				"key": "students",
				"label": "Students",
				"kind": "number"
			},
			{
				"key": "locations",
				"label": "HQ and offices",
				"kind": "locations"
			},
			{
				"key": "website",
				"label": "Website",
				"kind": "url"
			},
			{
				"key": "careers",
				"label": "Careers page",
				"kind": "url"
			},
			{
				"key": "linkedin",
				"label": "LinkedIn",
				"kind": "url"
			},
			{
				"key": "x",
				"label": "X / Twitter",
				"kind": "url"
			},
			{
				"key": "github",
				"label": "GitHub",
				"kind": "url"
			},
			{
				"key": "huggingface",
				"label": "Hugging Face",
				"kind": "url"
			},
			{
				"key": "email",
				"label": "Contact email",
				"kind": "text"
			},
			{
				"key": "hw_chain",
				"label": "Assembly chain",
				"kind": "multi"
			},
			{
				"key": "components",
				"label": "Parts supplied",
				"kind": "multi"
			},
			{
				"key": "model_chain",
				"label": "Model chain",
				"kind": "multi"
			},
			{
				"key": "referral_status",
				"label": "Referral status",
				"kind": "select",
				"private": true
			},
			{
				"key": "referral_terms",
				"label": "Referral terms",
				"kind": "text",
				"private": true
			},
			{
				"key": "referral_contact",
				"label": "Referral contact",
				"kind": "text",
				"private": true
			},
			{
				"key": "agreement_ref",
				"label": "Agreement reference",
				"kind": "text",
				"private": true
			}
		],
		"relations": [
			{
				"key": "leaders",
				"label": "Leadership",
				"many": true
			},
			{
				"key": "partners",
				"label": "Partners",
				"many": true
			},
			{
				"key": "backed_by",
				"label": "Investors",
				"many": true
			},
			{
				"key": "sells_to",
				"label": "Customers",
				"many": true
			},
			{
				"key": "buys_from",
				"label": "Suppliers",
				"many": true
			},
			{
				"key": "highlights",
				"label": "Highlights",
				"many": true,
				"max": 3
			}
		]
	},
	lab: {
		"label": "Research group",
		"fields": [
			{
				"key": "focus",
				"label": "Focus areas",
				"kind": "multi"
			},
			{
				"key": "lead_text",
				"label": "Lead",
				"kind": "text"
			},
			{
				"key": "country",
				"label": "Country",
				"kind": "text"
			},
			{
				"key": "city",
				"label": "City",
				"kind": "text"
			},
			{
				"key": "founded",
				"label": "Founded",
				"kind": "year"
			},
			{
				"key": "members",
				"label": "Members",
				"kind": "number"
			},
			{
				"key": "locations",
				"label": "HQ and offices",
				"kind": "locations"
			},
			{
				"key": "website",
				"label": "Website",
				"kind": "url"
			},
			{
				"key": "careers",
				"label": "Careers page",
				"kind": "url"
			},
			{
				"key": "linkedin",
				"label": "LinkedIn",
				"kind": "url"
			},
			{
				"key": "x",
				"label": "X / Twitter",
				"kind": "url"
			},
			{
				"key": "github",
				"label": "GitHub",
				"kind": "url"
			},
			{
				"key": "huggingface",
				"label": "Hugging Face",
				"kind": "url"
			},
			{
				"key": "email",
				"label": "Contact email",
				"kind": "text"
			},
			{
				"key": "hw_chain",
				"label": "Assembly chain",
				"kind": "multi"
			},
			{
				"key": "components",
				"label": "Parts supplied",
				"kind": "multi"
			},
			{
				"key": "model_chain",
				"label": "Model chain",
				"kind": "multi"
			},
			{
				"key": "referral_status",
				"label": "Referral status",
				"kind": "select",
				"private": true
			},
			{
				"key": "referral_terms",
				"label": "Referral terms",
				"kind": "text",
				"private": true
			},
			{
				"key": "referral_contact",
				"label": "Referral contact",
				"kind": "text",
				"private": true
			},
			{
				"key": "agreement_ref",
				"label": "Agreement reference",
				"kind": "text",
				"private": true
			}
		],
		"relations": [
			{
				"key": "parent",
				"label": "Part of",
				"many": false
			},
			{
				"key": "leads",
				"label": "Led by",
				"many": true
			},
			{
				"key": "leaders",
				"label": "Leadership",
				"many": true
			},
			{
				"key": "partners",
				"label": "Partners",
				"many": true
			},
			{
				"key": "backed_by",
				"label": "Investors",
				"many": true
			},
			{
				"key": "sells_to",
				"label": "Customers",
				"many": true
			},
			{
				"key": "buys_from",
				"label": "Suppliers",
				"many": true
			},
			{
				"key": "highlights",
				"label": "Highlights",
				"many": true,
				"max": 3
			}
		]
	},
	product: {
		"label": "Robot or component",
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select"
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select"
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date"
			},
			{
				"key": "locomotion",
				"label": "Locomotion",
				"kind": "select"
			},
			{
				"key": "q_kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "arm_kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "base_kind",
				"label": "Base",
				"kind": "select"
			},
			{
				"key": "arms",
				"label": "Arms",
				"kind": "number"
			},
			{
				"key": "h_kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "motion",
				"label": "Motion",
				"kind": "select"
			},
			{
				"key": "cam_kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "dc_kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "misc_kind",
				"label": "What it is",
				"kind": "text"
			},
			{
				"key": "motor_kind",
				"label": "Motor type",
				"kind": "select"
			},
			{
				"key": "gear_kind",
				"label": "Type",
				"kind": "select"
			},
			{
				"key": "enc_kind",
				"label": "Encoder type",
				"kind": "select"
			},
			{
				"key": "bearing_kind",
				"label": "Type",
				"kind": "select"
			},
			{
				"key": "lidar_kind",
				"label": "LiDAR type",
				"kind": "select"
			},
			{
				"key": "tactile_kind",
				"label": "Sensing method",
				"kind": "select"
			},
			{
				"key": "mat_kind",
				"label": "Material",
				"kind": "select"
			},
			{
				"key": "grade",
				"label": "Grade",
				"kind": "text"
			},
			{
				"key": "origin",
				"label": "Produced in",
				"kind": "text"
			},
			{
				"key": "height_cm",
				"label": "Height",
				"kind": "number"
			},
			{
				"key": "length_cm",
				"label": "Length",
				"kind": "number"
			},
			{
				"key": "width_cm",
				"label": "Width",
				"kind": "number"
			},
			{
				"key": "reach_mm",
				"label": "Reach",
				"kind": "number"
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text"
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number"
			},
			{
				"key": "dof",
				"label": "DoF",
				"kind": "number"
			},
			{
				"key": "active_dof",
				"label": "Active DoF",
				"kind": "number"
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number"
			},
			{
				"key": "repeatability_mm",
				"label": "Repeatability",
				"kind": "number"
			},
			{
				"key": "tcp_speed_mps",
				"label": "Max TCP speed",
				"kind": "number"
			},
			{
				"key": "speed_mps",
				"label": "Max speed",
				"kind": "number"
			},
			{
				"key": "step_cm",
				"label": "Max step height",
				"kind": "number"
			},
			{
				"key": "slope_deg",
				"label": "Max slope",
				"kind": "number"
			},
			{
				"key": "peak_torque_nm",
				"label": "Peak torque",
				"kind": "number"
			},
			{
				"key": "rated_torque_nm",
				"label": "Rated torque",
				"kind": "number"
			},
			{
				"key": "rated_speed_rpm",
				"label": "Rated speed",
				"kind": "number"
			},
			{
				"key": "ratio",
				"label": "Gear ratio",
				"kind": "text"
			},
			{
				"key": "backlash_arcmin",
				"label": "Backlash",
				"kind": "number"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number"
			},
			{
				"key": "resolution_bits",
				"label": "Resolution",
				"kind": "number"
			},
			{
				"key": "enc_absolute",
				"label": "Absolute",
				"kind": "select"
			},
			{
				"key": "current_cont_a",
				"label": "Continuous current",
				"kind": "number"
			},
			{
				"key": "current_peak_a",
				"label": "Peak current",
				"kind": "number"
			},
			{
				"key": "voltage_v",
				"label": "Voltage",
				"kind": "number"
			},
			{
				"key": "channels",
				"label": "Channels",
				"kind": "number"
			},
			{
				"key": "range_m",
				"label": "Range",
				"kind": "number"
			},
			{
				"key": "points_per_s",
				"label": "Points per second",
				"kind": "number"
			},
			{
				"key": "ft_axes",
				"label": "Axes",
				"kind": "select"
			},
			{
				"key": "force_range_n",
				"label": "Force range",
				"kind": "number"
			},
			{
				"key": "torque_range_nm",
				"label": "Torque range",
				"kind": "number"
			},
			{
				"key": "imu_axes",
				"label": "Axes",
				"kind": "select"
			},
			{
				"key": "output_hz",
				"label": "Output rate",
				"kind": "number"
			},
			{
				"key": "taxels",
				"label": "Sensing points",
				"kind": "number"
			},
			{
				"key": "spatial_res_mm",
				"label": "Spatial resolution",
				"kind": "number"
			},
			{
				"key": "tops",
				"label": "AI performance",
				"kind": "number"
			},
			{
				"key": "cpu",
				"label": "CPU",
				"kind": "text"
			},
			{
				"key": "gpu",
				"label": "GPU",
				"kind": "text"
			},
			{
				"key": "memory_gb",
				"label": "Memory",
				"kind": "number"
			},
			{
				"key": "capacity_wh",
				"label": "Capacity",
				"kind": "number"
			},
			{
				"key": "chemistry",
				"label": "Chemistry",
				"kind": "select"
			},
			{
				"key": "cycles",
				"label": "Cycle life",
				"kind": "number"
			},
			{
				"key": "peak_force_n",
				"label": "Peak force (linear)",
				"kind": "number"
			},
			{
				"key": "runtime_h",
				"label": "Runtime",
				"kind": "number"
			},
			{
				"key": "resolution_mp",
				"label": "Resolution",
				"kind": "number"
			},
			{
				"key": "fps",
				"label": "Frame rate",
				"kind": "number"
			},
			{
				"key": "fov_h_deg",
				"label": "Horizontal FoV",
				"kind": "number"
			},
			{
				"key": "fov_v_deg",
				"label": "Vertical FoV",
				"kind": "number"
			},
			{
				"key": "depth_min_m",
				"label": "Min depth",
				"kind": "number"
			},
			{
				"key": "depth_max_m",
				"label": "Max depth",
				"kind": "number"
			},
			{
				"key": "shutter",
				"label": "Shutter",
				"kind": "select"
			},
			{
				"key": "sample_rate_hz",
				"label": "Sample rate",
				"kind": "number"
			},
			{
				"key": "latency_ms",
				"label": "Latency",
				"kind": "number"
			},
			{
				"key": "tracking",
				"label": "Tracking",
				"kind": "text"
			},
			{
				"key": "haptics",
				"label": "Force / haptic feedback",
				"kind": "select"
			},
			{
				"key": "streams",
				"label": "Recorded streams",
				"kind": "tags"
			},
			{
				"key": "formats",
				"label": "Output formats",
				"kind": "tags"
			},
			{
				"key": "actuation",
				"label": "Actuation",
				"kind": "select"
			},
			{
				"key": "tactile",
				"label": "Tactile sensing",
				"kind": "select"
			},
			{
				"key": "body_actuator",
				"label": "Body actuator",
				"kind": "select"
			},
			{
				"key": "transmission",
				"label": "Transmission",
				"kind": "text"
			},
			{
				"key": "mounting",
				"label": "Mounting",
				"kind": "text"
			},
			{
				"key": "sensors",
				"label": "External sensors",
				"kind": "tags"
			},
			{
				"key": "imu",
				"label": "Built-in IMU",
				"kind": "select"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags"
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text"
			},
			{
				"key": "battery",
				"label": "Battery",
				"kind": "text"
			},
			{
				"key": "charging",
				"label": "Charging",
				"kind": "text"
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number"
			},
			{
				"key": "onboard_model",
				"label": "AI model it runs",
				"kind": "text"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi"
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number"
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year"
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select"
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text"
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags"
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs"
			}
		],
		"relations": [
			{
				"key": "maker",
				"label": "Maker",
				"many": false
			},
			{
				"key": "uses",
				"label": "Parts and models",
				"many": true
			},
			{
				"key": "works_with",
				"label": "Works with",
				"many": true
			},
			{
				"key": "suppliers",
				"label": "Suppliers",
				"many": true
			}
		]
	},
	model: {
		"label": "Model",
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date"
			},
			{
				"key": "weights",
				"label": "Weights",
				"kind": "select"
			},
			{
				"key": "license",
				"label": "License",
				"kind": "text"
			},
			{
				"key": "embodiments",
				"label": "Embodiments",
				"kind": "tags"
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url"
			},
			{
				"key": "params_b",
				"label": "Parameters",
				"kind": "number"
			},
			{
				"key": "design",
				"label": "Design",
				"kind": "select"
			},
			{
				"key": "backbone",
				"label": "Backbone",
				"kind": "text"
			},
			{
				"key": "action_head",
				"label": "Action output",
				"kind": "select"
			},
			{
				"key": "action_hz",
				"label": "Action rate",
				"kind": "number"
			},
			{
				"key": "planner_hz",
				"label": "Planner rate",
				"kind": "text"
			},
			{
				"key": "inputs",
				"label": "Inputs",
				"kind": "tags"
			},
			{
				"key": "action_space",
				"label": "Action space",
				"kind": "text"
			},
			{
				"key": "training_data",
				"label": "Training data",
				"kind": "text"
			},
			{
				"key": "robot_hours",
				"label": "Robot data",
				"kind": "number"
			},
			{
				"key": "train_compute",
				"label": "Training compute",
				"kind": "text"
			},
			{
				"key": "finetune",
				"label": "Fine-tuning by users",
				"kind": "select"
			},
			{
				"key": "runs_on",
				"label": "Runs",
				"kind": "select"
			},
			{
				"key": "inference_hw",
				"label": "Inference hardware",
				"kind": "text"
			},
			{
				"key": "latency_ms",
				"label": "Latency",
				"kind": "number"
			},
			{
				"key": "min_gpu",
				"label": "Minimum GPU",
				"kind": "text"
			}
		],
		"relations": [{
			"key": "developer",
			"label": "Developer",
			"many": true
		}, {
			"key": "trained_on",
			"label": "Trained on",
			"many": true
		}]
	},
	benchmark: {
		"label": "Benchmark",
		"fields": [
			{
				"key": "category",
				"label": "Category",
				"kind": "select"
			},
			{
				"key": "setting",
				"label": "Setting",
				"kind": "select"
			},
			{
				"key": "metric",
				"label": "Metric",
				"kind": "text"
			},
			{
				"key": "unit",
				"label": "Score unit",
				"kind": "text"
			},
			{
				"key": "direction",
				"label": "Ranking",
				"kind": "select"
			},
			{
				"key": "tasks",
				"label": "Tasks",
				"kind": "number"
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date"
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url"
			}
		],
		"relations": [
			{
				"key": "maintainer",
				"label": "Maintained by",
				"many": true
			},
			{
				"key": "results",
				"label": "Results",
				"many": true
			},
			{
				"key": "robots",
				"label": "Robots",
				"many": true
			}
		]
	},
	datapack: {
		"label": "Datapack",
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date"
			},
			{
				"key": "hours",
				"label": "Hours",
				"kind": "number"
			},
			{
				"key": "episodes",
				"label": "Episodes",
				"kind": "number"
			},
			{
				"key": "size_gb",
				"label": "Size",
				"kind": "number"
			},
			{
				"key": "tasks",
				"label": "Tasks",
				"kind": "number"
			},
			{
				"key": "modalities",
				"label": "Modalities",
				"kind": "multi"
			},
			{
				"key": "embodiments",
				"label": "Embodiments",
				"kind": "tags"
			},
			{
				"key": "format",
				"label": "Format",
				"kind": "text"
			},
			{
				"key": "license",
				"label": "License",
				"kind": "text"
			},
			{
				"key": "access",
				"label": "Access",
				"kind": "select"
			},
			{
				"key": "url",
				"label": "Download",
				"kind": "url"
			}
		],
		"relations": [{
			"key": "provider",
			"label": "Provider",
			"many": false
		}, {
			"key": "robots",
			"label": "Collected on",
			"many": true
		}]
	},
	person: {
		"label": "Person",
		"fields": [
			{
				"key": "title",
				"label": "Current title",
				"kind": "text"
			},
			{
				"key": "location",
				"label": "Location",
				"kind": "text"
			},
			{
				"key": "expertise",
				"label": "Expertise",
				"kind": "tags"
			},
			{
				"key": "linkedin",
				"label": "LinkedIn",
				"kind": "url"
			},
			{
				"key": "website",
				"label": "Website",
				"kind": "url"
			}
		],
		"relations": [{
			"key": "works_at",
			"label": "Organisations",
			"many": true
		}]
	},
	funding: {
		"label": "Funding round",
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date"
			},
			{
				"key": "round",
				"label": "Round",
				"kind": "select"
			},
			{
				"key": "amount_usd_m",
				"label": "Amount",
				"kind": "number"
			},
			{
				"key": "valuation_usd_m",
				"label": "Post-money valuation",
				"kind": "number"
			}
		],
		"relations": [{
			"key": "company",
			"label": "Company",
			"many": false
		}, {
			"key": "investors",
			"label": "Investors",
			"many": true
		}]
	},
	deployment: {
		"label": "Deployment",
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date"
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "units",
				"label": "Units",
				"kind": "number"
			},
			{
				"key": "use_case",
				"label": "Use case",
				"kind": "text"
			},
			{
				"key": "location",
				"label": "Location",
				"kind": "text"
			}
		],
		"relations": [
			{
				"key": "vendor",
				"label": "Vendor",
				"many": false
			},
			{
				"key": "customer",
				"label": "Customer",
				"many": true
			},
			{
				"key": "integrator",
				"label": "Integrator",
				"many": true
			},
			{
				"key": "robots",
				"label": "Robots",
				"many": true
			},
			{
				"key": "models",
				"label": "Models",
				"many": true
			}
		]
	},
	post: {
		"label": "Post",
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date"
			},
			{
				"key": "kind",
				"label": "Category",
				"kind": "select"
			},
			{
				"key": "link",
				"label": "Source link",
				"kind": "url"
			},
			{
				"key": "video",
				"label": "Thumbnail video (YouTube or X link)",
				"kind": "url"
			},
			{
				"key": "byline",
				"label": "By",
				"kind": "text"
			},
			{
				"key": "tags",
				"label": "Tags",
				"kind": "tags"
			},
			{
				"key": "origin",
				"label": "Origin",
				"kind": "select"
			},
			{
				"key": "source_site",
				"label": "Reposted from (site)",
				"kind": "text"
			},
			{
				"key": "source_author",
				"label": "Original author",
				"kind": "text"
			},
			{
				"key": "lab",
				"label": "Lab",
				"kind": "text"
			},
			{
				"key": "credits",
				"label": "Credits (people)",
				"kind": "longtext"
			},
			{
				"key": "references",
				"label": "References",
				"kind": "longtext"
			}
		],
		"relations": [{
			"key": "about",
			"label": "About",
			"many": true
		}]
	},
	software: {
		"label": "Software",
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select"
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date"
			},
			{
				"key": "license_model",
				"label": "License",
				"kind": "select"
			},
			{
				"key": "license",
				"label": "License name",
				"kind": "text"
			},
			{
				"key": "pricing",
				"label": "Pricing",
				"kind": "text"
			},
			{
				"key": "platforms",
				"label": "Runs on",
				"kind": "tags"
			},
			{
				"key": "works_with",
				"label": "Works with",
				"kind": "tags"
			},
			{
				"key": "languages",
				"label": "APIs",
				"kind": "tags"
			},
			{
				"key": "url",
				"label": "Website",
				"kind": "url"
			},
			{
				"key": "repo",
				"label": "Code",
				"kind": "url"
			},
			{
				"key": "docs",
				"label": "Docs",
				"kind": "url"
			}
		],
		"relations": [{
			"key": "developer",
			"label": "Developer",
			"many": true
		}, {
			"key": "supports",
			"label": "Supports",
			"many": true
		}]
	},
	solution: {
		"label": "Solution",
		"fields": [
			{
				"key": "category",
				"label": "Category",
				"kind": "select"
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "pricing",
				"label": "Pricing",
				"kind": "text"
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select"
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url"
			}
		],
		"relations": [{
			"key": "provider",
			"label": "Provider",
			"many": false
		}, {
			"key": "supports",
			"label": "Works with",
			"many": true
		}]
	},
	job: {
		"label": "Job",
		"fields": [
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "posted",
				"label": "Posted",
				"kind": "date"
			},
			{
				"key": "location",
				"label": "Location",
				"kind": "text"
			},
			{
				"key": "remote",
				"label": "Work mode",
				"kind": "select"
			},
			{
				"key": "employment",
				"label": "Type",
				"kind": "select"
			},
			{
				"key": "seniority",
				"label": "Seniority",
				"kind": "select"
			},
			{
				"key": "area",
				"label": "Area",
				"kind": "multi"
			},
			{
				"key": "skills",
				"label": "Skills",
				"kind": "tags"
			},
			{
				"key": "salary_min",
				"label": "Salary from",
				"kind": "number"
			},
			{
				"key": "salary_max",
				"label": "Salary to",
				"kind": "number"
			},
			{
				"key": "apply_url",
				"label": "Apply link",
				"kind": "url"
			}
		],
		"relations": [{
			"key": "company",
			"label": "Organisation",
			"many": false
		}, {
			"key": "related",
			"label": "Works on",
			"many": true
		}]
	},
	event: {
		"label": "Event",
		"fields": [
			{
				"key": "status",
				"label": "Status",
				"kind": "select"
			},
			{
				"key": "date",
				"label": "Date",
				"kind": "date"
			},
			{
				"key": "end_date",
				"label": "End date",
				"kind": "date"
			},
			{
				"key": "venue",
				"label": "Venue",
				"kind": "text"
			},
			{
				"key": "city",
				"label": "City",
				"kind": "text"
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url"
			},
			{
				"key": "schedule",
				"label": "Schedule",
				"kind": "schedule"
			}
		],
		"relations": [{
			"key": "featured",
			"label": "Featured",
			"many": true
		}, {
			"key": "organisers",
			"label": "Organisers",
			"many": true
		}]
	},
	paper: {
		"label": "Paper",
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date"
			},
			{
				"key": "authors_text",
				"label": "Authors",
				"kind": "text"
			},
			{
				"key": "venue",
				"label": "Venue",
				"kind": "text"
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url"
			},
			{
				"key": "focus",
				"label": "Focus areas",
				"kind": "multi"
			},
			{
				"key": "origin",
				"label": "Origin",
				"kind": "select"
			},
			{
				"key": "source_site",
				"label": "Reposted from (site)",
				"kind": "text"
			},
			{
				"key": "source_author",
				"label": "Original author",
				"kind": "text"
			},
			{
				"key": "lab",
				"label": "Lab",
				"kind": "text"
			},
			{
				"key": "credits",
				"label": "Credits (people)",
				"kind": "longtext"
			},
			{
				"key": "references",
				"label": "References",
				"kind": "longtext"
			}
		],
		"relations": [
			{
				"key": "authors",
				"label": "Authors",
				"many": true
			},
			{
				"key": "orgs",
				"label": "Organisations",
				"many": true
			},
			{
				"key": "about",
				"label": "Covers",
				"many": true
			}
		]
	}
};
