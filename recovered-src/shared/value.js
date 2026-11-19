function fieldVal(data, key) {
	if (!data) return null;
	const raw = data[key];
	if (raw && typeof raw === "object" && !Array.isArray(raw) && "v" in raw) return raw.v ?? null;
	return raw ?? null;
}
function fieldStr(data, key) {
	const v = fieldVal(data, key);
	if (v == null || v === "") return "";
	if (Array.isArray(v)) return v.map(String).join(", ");
	return String(v);
}
function asStringList(v) {
	if (v == null || v === "") return [];
	if (Array.isArray(v)) return v.map(String).filter(Boolean);
	return String(v).split(",").map((s) => s.trim()).filter(Boolean);
}
function categoryKey(rec) {
	if (rec.type !== "product") return null;
	const raw = fieldVal(rec.data, "category");
	if (raw == null || raw === "") return "misc";
	const s = String(raw);
	return {
		Humanoid: "humanoid",
		Quadruped: "quadruped",
		"Mobile manipulator": "mobile",
		Arm: "arm",
		"Hand / gripper": "hand",
		Teleoperation: "teleop",
		Actuator: "actuator",
		Motor: "motor",
		"Gearbox / reducer": "gearbox",
		Encoder: "encoder",
		"Motor driver": "driver",
		"Bearing / screw": "bearing",
		Camera: "camera",
		LiDAR: "lidar",
		"Force / torque sensor": "ft_sensor",
		IMU: "imu",
		"Tactile sensor": "tactile",
		Compute: "compute",
		Battery: "battery",
		Material: "material",
		Misc: "misc"
	}[s] || s.toLowerCase().replace(/\s+/g, "_") || "misc";
}
function fmtValue(v) {
	if (v == null || v === "") return "";
	if (typeof v === "boolean") return v ? "Yes" : "No";
	if (Array.isArray(v)) return v.map(fmtValue).filter(Boolean).join(", ");
	return String(v);
}
