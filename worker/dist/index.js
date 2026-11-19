import { t as __exportAll } from "./assets/rolldown-runtime-D8jQpDG7.js";
import { A as ORG_TYPES, B as TYPE_LABELS, C as LOOK_HATS, D as NO_IMAGE, E as NAV, F as QUOTE_USES, H as WEEKDAYS, I as SITE_NAME, L as SITE_ORG_SLUG, M as POST_CATEGORIES, N as QUOTE_STATUSES, O as ORG_COLOR_PALETTE, P as QUOTE_TIMING, R as SOFTWARE_KINDS, S as LEGAL_UPDATED, T as MONTHS, U as WL_DEFAULT, V as WALK_COLORS, W as WL_SECTIONS, _ as HW_CAT, a as CAT_ALIAS, b as INTRO_WHY_MAX, c as COMPOSE_KINDS, d as DATE_FIELDS, f as FEED_FILTERS, g as GEOCODE_UA, h as FREE_MAIL, i as ADMIN_ONLY, j as ORG_TYPES_LIST, k as ORG_GROUPS, l as CONTACT_EMAIL, m as FOCUS_AREAS, n as ACTIVITY_SUBNAV, o as COMMENTABLE, p as FEED_FILTER_ALIAS, r as ADDRESS_SUGGEST_URL, s as COMMUNITY_NEEDS, t as ACCOUNT_TABS, u as CONTRIB_PERMS, v as HW_CATEGORIES, w as MAP_TILES, x as KIND_ALIAS, y as HW_LETTERLESS, z as THEME_MENU } from "./assets/catalog-6mDCor_N.js";
import { a as sign, c as tokenHash, d as bytesToHex, i as randomBytes, l as sha256, n as hashPw, o as timingEqual, r as nowStamp, s as token, u as hmac } from "./assets/crypto-FYYfVqc8.js";
import { DurableObject } from "cloudflare:workers";
// node_modules/hono/dist/http-exception.js
/**
* `HTTPException` must be used when a fatal error such as authentication failure occurs.
*
* @see {@link https://hono.dev/docs/api/exception}
*
* @param {StatusCode} status - status code of HTTPException
* @param {HTTPExceptionOptions} options - options of HTTPException
* @param {HTTPExceptionOptions["res"]} options.res - response of options of HTTPException
* @param {HTTPExceptionOptions["message"]} options.message - message of options of HTTPException
* @param {HTTPExceptionOptions["cause"]} options.cause - cause of options of HTTPException
*
* @example
* ```ts
* import { HTTPException } from 'hono/http-exception'
*
* // ...
*
* app.post('/auth', async (c, next) => {
*   // authentication
*   if (authorized === false) {
*     throw new HTTPException(401, { message: 'Custom error message' })
*   }
*   await next()
* })
* ```
*/
var HTTPException = class extends Error {
	res;
	status;
	/**
	* Creates an instance of `HTTPException`.
	* @param status - HTTP status code for the exception. Defaults to 500.
	* @param options - Additional options for the exception.
	*/
	constructor(status = 500, options) {
		super(options?.message, { cause: options?.cause });
		this.res = options?.res;
		this.status = status;
	}
	/**
	* Returns the response object associated with the exception.
	* If a response object is not provided, a new response is created with the error message and status code.
	* @returns The response object.
	*/
	getResponse() {
		if (this.res) return new Response(this.res.body, {
			status: this.status,
			headers: this.res.headers
		});
		return new Response(this.message, { status: this.status });
	}
};
// node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = Symbol();
// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
	return new Response(arrayBuffer, { headers: { "Content-Type": contentType.replace(/^[^;]+/, (mediaType) => mediaType.toLowerCase()) } }).formData();
};
// node_modules/hono/dist/utils/body.js
var MAX_NESTED_OBJECTS = 1e4;
var isRawRequest = (request) => "headers" in request;
var parseBody = async (request, options = Object.create(null)) => {
	const { all = false, dot = false } = options;
	const mediaType = (isRawRequest(request) ? request.headers : request.raw.headers).get("Content-Type")?.split(";")[0].trim().toLowerCase();
	if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") return parseFormData(request, {
		all,
		dot
	});
	return {};
};
/**
* Parses form data from a request.
*
* @template T - The type of the parsed body data.
* @param {HonoRequest | Request} request - The request object containing form data.
* @param {ParseBodyOptions} options - Options for parsing the form data.
* @returns {Promise<T>} The parsed body data.
*/
async function parseFormData(request, options) {
	if (!isRawRequest(request) && request.bodyCache.formData) return convertFormDataToBodyData(await request.bodyCache.formData, options);
	const headers = isRawRequest(request) ? request.headers : request.raw.headers;
	const formDataPromise = bufferToFormData(await request.arrayBuffer(), headers.get("Content-Type") || "");
	if (!isRawRequest(request)) request.bodyCache.formData = formDataPromise;
	const formData = await formDataPromise;
	if (formData) return convertFormDataToBodyData(formData, options);
	return {};
}
/**
* Converts form data to body data based on the provided options.
*
* @template T - The type of the parsed body data.
* @param {FormData} formData - The form data to convert.
* @param {ParseBodyOptions} options - Options for parsing the form data.
* @returns {T} The converted body data.
*/
function convertFormDataToBodyData(formData, options) {
	const form = Object.create(null);
	const nestingState = { count: 0 };
	formData.forEach((value, key) => {
		if (!(options.all || key.endsWith("[]"))) form[key] = value;
		else handleParsingAllValues(form, key, value);
	});
	if (options.dot) Object.entries(form).forEach(([key, value]) => {
		if (key.includes(".")) {
			handleParsingNestedValues(form, key, value, nestingState);
			delete form[key];
		}
	});
	return form;
}
/**
* Handles parsing all values for a given key, supporting multiple values as arrays.
*
* @param {BodyData} form - The form data object.
* @param {string} key - The key to parse.
* @param {FormDataEntryValue} value - The value to assign.
*/
var handleParsingAllValues = (form, key, value) => {
	if (form[key] !== void 0) {
		if (Array.isArray(form[key])) form[key].push(value);
		else form[key] = [form[key], value];
	} else if (!key.endsWith("[]")) form[key] = value;
	else form[key] = [value];
};
/**
* Handles parsing nested values using dot notation keys.
*
* @param {BodyData} form - The form data object.
* @param {string} key - The dot notation key.
* @param {BodyDataValue} value - The value to assign.
* @param {{ count: number }} state - The state object tracking nesting depth.
*/
var handleParsingNestedValues = (form, key, value, state) => {
	if (/(?:^|\.)__proto__\./.test(key)) return;
	let nestedForm = form;
	const keys = key.split(".", 34);
	if (keys.length > 33) throwNestingLimitExceeded();
	keys.forEach((key, index) => {
		if (index === keys.length - 1) nestedForm[key] = value;
		else {
			if (!nestedForm[key] || typeof nestedForm[key] !== "object" || Array.isArray(nestedForm[key]) || nestedForm[key] instanceof File) {
				if (state.count++ >= MAX_NESTED_OBJECTS) throwNestingLimitExceeded();
				nestedForm[key] = Object.create(null);
			}
			nestedForm = nestedForm[key];
		}
	});
};
var throwNestingLimitExceeded = () => {
	throw new Error("Nesting limit exceeded");
};
// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
	const paths = path.split("/");
	if (paths[0] === "") paths.shift();
	return paths;
};
var splitRoutingPath = (routePath) => {
	const { groups, path } = extractGroupsFromPath(routePath);
	return replaceGroupMarks(splitPath(path), groups);
};
var extractGroupsFromPath = (path) => {
	const groups = [];
	path = path.replace(/\{[^}]+\}/g, (match, index) => {
		const mark = `@${index}`;
		groups.push([mark, match]);
		return mark;
	});
	return {
		groups,
		path
	};
};
var replaceGroupMarks = (paths, groups) => {
	for (let i = groups.length - 1; i >= 0; i--) {
		const [mark] = groups[i];
		for (let j = paths.length - 1; j >= 0; j--) if (paths[j].includes(mark)) {
			paths[j] = paths[j].replace(mark, groups[i][1]);
			break;
		}
	}
	return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
	if (label === "*") return "*";
	const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
	if (match) {
		const cacheKey = `${label}#${next}`;
		if (!patternCache[cacheKey]) {
			if (match[2]) patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [
				cacheKey,
				match[1],
				new RegExp(`^${match[2]}(?=/${next})`)
			] : [
				label,
				match[1],
				new RegExp(`^${match[2]}$`)
			];
			else patternCache[cacheKey] = [
				label,
				match[1],
				true
			];
		}
		return patternCache[cacheKey];
	}
	return null;
};
var tryDecode = (str, decoder) => {
	try {
		return decoder(str);
	} catch {
		return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
			try {
				return decoder(match);
			} catch {
				return match;
			}
		});
	}
};
var decodeURIWithPreservedPercent = (value) => decodeURI(value.includes("%25") ? value.replace(/%25/g, "%2525") : value);
var getPath = (request) => {
	const url = request.url;
	const start = url.indexOf("/", url.indexOf(":") + 4);
	let i = start;
	for (; i < url.length; i++) {
		const charCode = url.charCodeAt(i);
		if (charCode === 37) {
			const queryIndex = url.indexOf("?", i);
			const hashIndex = url.indexOf("#", i);
			const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
			const path = url.slice(start, end);
			const decoded = tryDecode(path, decodeURIWithPreservedPercent);
			if (/%(?![0-9A-Fa-f]{2})/.test(path)) {
				const rewritten = new URL("http://localhost");
				rewritten.pathname = decoded.replace(/[\\\t\n\r]/g, encodeURIComponent);
				if (tryDecode(rewritten.pathname, decodeURIWithPreservedPercent) !== decoded) return tryDecode(path.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"), decodeURIWithPreservedPercent);
			}
			return decoded;
		} else if (charCode === 63 || charCode === 35) break;
	}
	return url.slice(start, i);
};
var getPathNoStrict = (request) => {
	const result = getPath(request);
	return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
/**
* Merge paths.
* @param {string[]} ...paths - The paths to merge.
* @returns {string} The merged path.
* @example
* mergePath('/api', '/users') // '/api/users'
* mergePath('/api/', '/users') // '/api/users'
* mergePath('/api', '/') // '/api'
* mergePath('/api/', '/') // '/api/'
*/
var mergePath = (base, sub, ...rest) => {
	if (rest.length) sub = mergePath(sub, ...rest);
	return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
	if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) return null;
	const segments = path.split("/");
	const results = [];
	let basePath = "";
	segments.forEach((segment) => {
		if (segment !== "" && !/\:/.test(segment)) basePath += "/" + segment;
		else if (/\:/.test(segment)) {
			if (segment.charCodeAt(segment.length - 1) === 63) {
				if (results.length === 0 && basePath === "") results.push("/");
				else results.push(basePath);
				const optionalSegment = segment.slice(0, -1);
				basePath += "/" + optionalSegment;
				results.push(basePath);
			} else basePath += "/" + segment;
		}
	});
	return results.filter((v, i, a) => a.indexOf(v) === i);
};
var tryDecodeURIComponent = (str) => str.indexOf("%") !== -1 ? tryDecode(str, decodeURIComponent_) : str;
var _decodeURI = (value) => {
	if (value.indexOf("+") !== -1) value = value.replace(/\+/g, " ");
	return tryDecodeURIComponent(value);
};
var _getQueryParam = (url, key, multiple) => {
	const hashIndex = url.indexOf("#", 8);
	if (hashIndex !== -1) url = url.slice(0, hashIndex);
	let encoded;
	if (!multiple && key && !/[%+&=]/.test(key)) {
		const queryIndex = url.indexOf("?", 8);
		let keyIndex = queryIndex;
		if (keyIndex === -1) return;
		if (!url.startsWith(key, keyIndex + 1)) keyIndex = url.indexOf(`&${key}`, keyIndex + 1);
		while (keyIndex !== -1) {
			const trailingKeyCode = url.charCodeAt(keyIndex + key.length + 1);
			if (trailingKeyCode === 61 || trailingKeyCode === 38 || isNaN(trailingKeyCode)) {
				if (keyIndex > queryIndex && /(?:^|&)[^=&]*[%+]/.test(url.slice(queryIndex + 1, keyIndex))) break;
				if (trailingKeyCode === 61) {
					const valueIndex = keyIndex + key.length + 2;
					const endIndex = url.indexOf("&", valueIndex);
					return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
				}
				return "";
			}
			keyIndex = url.indexOf(`&${key}`, keyIndex + 1);
		}
		encoded = /[%+]/.test(url);
		if (!encoded) return;
	}
	const results = Object.create(null);
	encoded ??= /[%+]/.test(url);
	let keyIndex = url.indexOf("?", 8);
	while (keyIndex !== -1) {
		const nextKeyIndex = url.indexOf("&", keyIndex + 1);
		let valueIndex = url.indexOf("=", keyIndex);
		if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) valueIndex = -1;
		let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex);
		if (encoded) name = _decodeURI(name);
		keyIndex = nextKeyIndex;
		if (name === "") continue;
		let value;
		if (valueIndex === -1) value = "";
		else {
			value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
			if (encoded) value = _decodeURI(value);
		}
		if (multiple) {
			if (!(results[name] && Array.isArray(results[name]))) results[name] = [];
			results[name].push(value);
		} else results[name] ??= value;
	}
	return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
	return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;
// node_modules/hono/dist/request.js
var HonoRequest = class {
	/**
	* `.raw` can get the raw Request object.
	*
	* @see {@link https://hono.dev/docs/api/request#raw}
	*
	* @example
	* ```ts
	* // For Cloudflare Workers
	* app.post('/', async (c) => {
	*   const metadata = c.req.raw.cf?.hostMetadata?
	*   ...
	* })
	* ```
	*/
	raw;
	#validatedData;
	#matchResult;
	routeIndex = 0;
	/**
	* `.path` can get the pathname of the request.
	*
	* @see {@link https://hono.dev/docs/api/request#path}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const pathname = c.req.path // `/about/me`
	* })
	* ```
	*/
	path;
	bodyCache = {};
	constructor(request, path = "/", matchResult = [[]]) {
		this.raw = request;
		this.path = path;
		this.#matchResult = matchResult;
	}
	param(key) {
		return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
	}
	#getDecodedParam(key) {
		const paramKey = this.#matchResult[0][this.routeIndex]?.[1][key];
		const param = this.#getParamValue(paramKey);
		return param && tryDecodeURIComponent(param);
	}
	#getAllDecodedParams() {
		const decoded = {};
		const keys = Object.keys(this.#matchResult[0][this.routeIndex]?.[1] ?? {});
		for (const key of keys) {
			const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
			if (value !== void 0) decoded[key] = tryDecodeURIComponent(value);
		}
		return decoded;
	}
	#getParamValue(paramKey) {
		return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
	}
	query(key) {
		return getQueryParam(this.url, key);
	}
	queries(key) {
		return getQueryParams(this.url, key);
	}
	header(name) {
		if (name) return this.raw.headers.get(name) ?? void 0;
		const headerData = Object.create(null);
		this.raw.headers.forEach((value, key) => {
			headerData[key] = value;
		});
		return headerData;
	}
	async parseBody(options) {
		return parseBody(this, options);
	}
	#cachedBody = (key) => {
		const { bodyCache, raw } = this;
		const cachedBody = bodyCache[key];
		if (cachedBody) return cachedBody;
		for (const anyCachedKey in bodyCache) return bodyCache[anyCachedKey].then((body) => {
			if (anyCachedKey === "json") body = JSON.stringify(body);
			const contentType = anyCachedKey === "formData" ? void 0 : raw.headers.get("content-type");
			return new Response(body, { headers: contentType ? { "Content-Type": contentType } : void 0 })[key]();
		});
		return bodyCache[key] = raw[key]();
	};
	/**
	* `.json()` can parse Request body of type `application/json`
	*
	* @see {@link https://hono.dev/docs/api/request#json}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.json()
	* })
	* ```
	*/
	json() {
		return this.#cachedBody("text").then((text) => JSON.parse(text));
	}
	/**
	* `.text()` can parse Request body of type `text/plain`
	*
	* @see {@link https://hono.dev/docs/api/request#text}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.text()
	* })
	* ```
	*/
	text() {
		return this.#cachedBody("text");
	}
	/**
	* `.arrayBuffer()` parse Request body as an `ArrayBuffer`
	*
	* @see {@link https://hono.dev/docs/api/request#arraybuffer}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.arrayBuffer()
	* })
	* ```
	*/
	arrayBuffer() {
		return this.#cachedBody("arrayBuffer");
	}
	/**
	* `.bytes()` parses the request body as a `Uint8Array`.
	*
	* @see {@link https://hono.dev/docs/api/request#bytes}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.bytes()
	* })
	* ```
	*/
	bytes() {
		return this.#cachedBody("arrayBuffer").then((buffer) => new Uint8Array(buffer));
	}
	/**
	* Parses the request body as a `Blob`.
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.blob();
	* });
	* ```
	* @see https://hono.dev/docs/api/request#blob
	*/
	blob() {
		return this.#cachedBody("blob");
	}
	/**
	* Parses the request body as `FormData`.
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.formData();
	* });
	* ```
	* @see https://hono.dev/docs/api/request#formdata
	*/
	formData() {
		return this.#cachedBody("formData");
	}
	/**
	* Adds validated data to the request.
	*
	* @param target - The target of the validation.
	* @param data - The validated data to add.
	*/
	addValidatedData(target, data) {
		(this.#validatedData ??= {})[target] = data;
	}
	valid(target) {
		return this.#validatedData?.[target];
	}
	/**
	* `.url` can get the request url strings.
	*
	* @see {@link https://hono.dev/docs/api/request#url}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const url = c.req.url // `http://localhost:8787/about/me`
	*   ...
	* })
	* ```
	*/
	get url() {
		return this.raw.url;
	}
	/**
	* `.method` can get the method name of the request.
	*
	* @see {@link https://hono.dev/docs/api/request#method}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const method = c.req.method // `GET`
	* })
	* ```
	*/
	get method() {
		return this.raw.method;
	}
	get [GET_MATCH_RESULT]() {
		return this.#matchResult;
	}
	/**
	* `.matchedRoutes` can return a matched route in the handler
	*
	* @deprecated
	*
	* Use matchedRoutes helper defined in "hono/route" instead.
	*
	* @see {@link https://hono.dev/docs/api/request#matchedroutes}
	*
	* @example
	* ```ts
	* app.use('*', async function logger(c, next) {
	*   await next()
	*   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
	*     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
	*     console.log(
	*       method,
	*       ' ',
	*       path,
	*       ' '.repeat(Math.max(10 - path.length, 0)),
	*       name,
	*       i === c.req.routeIndex ? '<- respond from here' : ''
	*     )
	*   })
	* })
	* ```
	*/
	get matchedRoutes() {
		return this.#matchResult[0].map(([[, route]]) => route);
	}
	/**
	* `.routePath` can retrieve the path registered within the handler
	*
	* @deprecated
	*
	* Use routePath helper defined in "hono/route" instead.
	*
	* @see {@link https://hono.dev/docs/api/request#routepath}
	*
	* @example
	* ```ts
	* app.get('/posts/:id', (c) => {
	*   return c.json({ path: c.req.routePath })
	* })
	* ```
	*/
	get routePath() {
		return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
	}
};
// node_modules/hono/dist/utils/html.js
/**
* @module
* HTML utility.
*/
var HtmlEscapedCallbackPhase = {
	Stringify: 1,
	BeforeStream: 2,
	Stream: 3
};
var raw = (value, callbacks) => {
	const escapedString = new String(value);
	escapedString.isEscaped = true;
	escapedString.callbacks = callbacks;
	return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
	if (typeof str === "object" && !(str instanceof String)) {
		if (!(str instanceof Promise)) str = str.toString();
		if (str instanceof Promise) str = await str;
	}
	const callbacks = str.callbacks;
	if (!callbacks?.length) return Promise.resolve(str);
	if (buffer) buffer[0] += str;
	else buffer = [str];
	const resStr = Promise.all(callbacks.map((c) => c({
		phase,
		buffer,
		context
	}))).then((res) => Promise.all(res.filter(Boolean).map((str) => resolveCallback(str, phase, false, context, buffer))).then(() => buffer[0]));
	if (preserveCallbacks) return raw(await resStr, callbacks);
	else return resStr;
};
// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
	return {
		"Content-Type": contentType,
		...headers
	};
};
var createResponseInstance = (body, init) => new Response(body, init);
var Context = class {
	#rawRequest;
	#req;
	/**
	* `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
	*
	* @see {@link https://hono.dev/docs/api/context#env}
	*
	* @example
	* ```ts
	* // Environment object for Cloudflare Workers
	* app.get('*', async c => {
	*   const counter = c.env.COUNTER
	* })
	* ```
	*/
	env = {};
	#var;
	finalized = false;
	/**
	* `.error` can get the error object from the middleware if the Handler throws an error.
	*
	* @see {@link https://hono.dev/docs/api/context#error}
	*
	* @example
	* ```ts
	* app.use('*', async (c, next) => {
	*   await next()
	*   if (c.error) {
	*     // do something...
	*   }
	* })
	* ```
	*/
	error;
	#status;
	#executionCtx;
	#res;
	#layout;
	#renderer;
	#notFoundHandler;
	#preparedHeaders;
	#matchResult;
	#path;
	/**
	* Creates an instance of the Context class.
	*
	* @param req - The Request object.
	* @param options - Optional configuration options for the context.
	*/
	constructor(req, options) {
		this.#rawRequest = req;
		if (options) {
			this.#executionCtx = options.executionCtx;
			this.env = options.env;
			this.#notFoundHandler = options.notFoundHandler;
			this.#path = options.path;
			this.#matchResult = options.matchResult;
		}
	}
	/**
	* `.req` is the instance of {@link HonoRequest}.
	*/
	get req() {
		this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
		return this.#req;
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#event}
	* The FetchEvent associated with the current request.
	*
	* @throws Will throw an error if the context does not have a FetchEvent.
	*/
	get event() {
		if (this.#executionCtx && "respondWith" in this.#executionCtx) return this.#executionCtx;
		else throw Error("This context has no FetchEvent");
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#executionctx}
	* The ExecutionContext associated with the current request.
	*
	* @throws Will throw an error if the context does not have an ExecutionContext.
	*/
	get executionCtx() {
		if (this.#executionCtx) return this.#executionCtx;
		else throw Error("This context has no ExecutionContext");
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#res}
	* The Response object for the current request.
	*/
	get res() {
		return this.#res ||= createResponseInstance(null, { headers: this.#preparedHeaders ??= new Headers() });
	}
	/**
	* Sets the Response object for the current request.
	*
	* @param _res - The Response object to set.
	*/
	set res(_res) {
		if (this.#res && _res) {
			_res = createResponseInstance(_res.body, _res);
			for (const [k, v] of this.#res.headers.entries()) {
				if (k === "content-type") continue;
				if (k === "set-cookie") {
					const cookies = this.#res.headers.getSetCookie();
					_res.headers.delete("set-cookie");
					for (const cookie of cookies) _res.headers.append("set-cookie", cookie);
				} else _res.headers.set(k, v);
			}
		}
		this.#res = _res;
		this.finalized = true;
	}
	/**
	* `.render()` can create a response within a layout.
	*
	* @see {@link https://hono.dev/docs/api/context#render-setrenderer}
	*
	* @example
	* ```ts
	* app.get('/', (c) => {
	*   return c.render('Hello!')
	* })
	* ```
	*/
	render = (...args) => {
		this.#renderer ??= (content) => this.html(content);
		return this.#renderer(...args);
	};
	/**
	* Sets the layout for the response.
	*
	* @param layout - The layout to set.
	* @returns The layout function.
	*/
	setLayout = (layout) => this.#layout = layout;
	/**
	* Gets the current layout for the response.
	*
	* @returns The current layout function.
	*/
	getLayout = () => this.#layout;
	/**
	* `.setRenderer()` can set the layout in the custom middleware.
	*
	* @see {@link https://hono.dev/docs/api/context#render-setrenderer}
	*
	* @example
	* ```tsx
	* app.use('*', async (c, next) => {
	*   c.setRenderer((content) => {
	*     return c.html(
	*       <html>
	*         <body>
	*           <p>{content}</p>
	*         </body>
	*       </html>
	*     )
	*   })
	*   await next()
	* })
	* ```
	*/
	setRenderer = (renderer) => {
		this.#renderer = renderer;
	};
	/**
	* `.header()` can set headers.
	*
	* @see {@link https://hono.dev/docs/api/context#header}
	*
	* @example
	* ```ts
	* app.get('/welcome', (c) => {
	*   // Set headers
	*   c.header('X-Message', 'Hello!')
	*   c.header('Content-Type', 'text/plain')
	*
	*   // Append multiple headers using the append option (e.g. Vary)
	*   c.header('Vary', 'Accept-Encoding', { append: true })
	*   c.header('Vary', 'User-Agent', { append: true })
	*
	*   return c.body('Thank you for coming')
	* })
	* ```
	*/
	header = (name, value, options) => {
		if (this.finalized && !this.#res.bodyUsed) this.#res = createResponseInstance(this.#res.body, this.#res);
		const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
		if (value === void 0) headers.delete(name);
		else if (options?.append) headers.append(name, value);
		else headers.set(name, value);
	};
	status = (status) => {
		this.#status = status;
	};
	/**
	* `.set()` can set the value specified by the key.
	*
	* @see {@link https://hono.dev/docs/api/context#set-get}
	*
	* @example
	* ```ts
	* app.use('*', async (c, next) => {
	*   c.set('message', 'Hono is hot!!')
	*   await next()
	* })
	* ```
	*/
	set = (key, value) => {
		this.#var ??= /* @__PURE__ */ new Map();
		this.#var.set(key, value);
	};
	/**
	* `.get()` can use the value specified by the key.
	*
	* @see {@link https://hono.dev/docs/api/context#set-get}
	*
	* @example
	* ```ts
	* app.get('/', (c) => {
	*   const message = c.get('message')
	*   return c.text(`The message is "${message}"`)
	* })
	* ```
	*/
	get = (key) => {
		return this.#var ? this.#var.get(key) : void 0;
	};
	/**
	* `.var` can access the value of a variable.
	*
	* @see {@link https://hono.dev/docs/api/context#var}
	*
	* @example
	* ```ts
	* const result = c.var.client.oneMethod()
	* ```
	*/
	get var() {
		if (!this.#var) return {};
		return Object.fromEntries(this.#var);
	}
	#newResponse(data, arg, headers) {
		let responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders;
		if (typeof arg === "object" && arg.headers) {
			responseHeaders ??= new Headers();
			for (const [key, value] of new Headers(arg.headers)) if (key === "set-cookie") responseHeaders.append(key, value);
			else responseHeaders.set(key, value);
		}
		if (headers) {
			if (!responseHeaders) {
				let count = 0;
				for (const k in headers) if (++count > 1 || typeof headers[k] !== "string") {
					responseHeaders = new Headers();
					break;
				}
			}
			if (responseHeaders) for (const k in headers) {
				const v = headers[k];
				if (typeof v === "string") responseHeaders.set(k, v);
				else {
					responseHeaders.delete(k);
					for (const v2 of v) responseHeaders.append(k, v2);
				}
			}
		}
		return createResponseInstance(data, {
			status: typeof arg === "number" ? arg : arg?.status ?? this.#status,
			headers: responseHeaders ?? headers
		});
	}
	newResponse = (...args) => this.#newResponse(...args);
	/**
	* `.body()` can return the HTTP response.
	* You can set headers with `.header()` and set HTTP status code with `.status`.
	* This can also be set in `.text()`, `.json()` and so on.
	*
	* @see {@link https://hono.dev/docs/api/context#body}
	*
	* @example
	* ```ts
	* app.get('/welcome', (c) => {
	*   // Set headers
	*   c.header('X-Message', 'Hello!')
	*   c.header('Content-Type', 'text/plain')
	*   // Set HTTP status code
	*   c.status(201)
	*
	*   // Return the response body
	*   return c.body('Thank you for coming')
	* })
	* ```
	*/
	body = (data, arg, headers) => this.#newResponse(data, arg, headers);
	/**
	* `.text()` can render text as `Content-Type:text/plain`.
	*
	* @see {@link https://hono.dev/docs/api/context#text}
	*
	* @example
	* ```ts
	* app.get('/say', (c) => {
	*   return c.text('Hello!')
	* })
	* ```
	*/
	text = (text, arg, headers) => {
		return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(text, arg, setDefaultContentType(TEXT_PLAIN, headers));
	};
	/**
	* `.json()` can render JSON as `Content-Type:application/json`.
	*
	* @see {@link https://hono.dev/docs/api/context#json}
	*
	* @example
	* ```ts
	* app.get('/api', (c) => {
	*   return c.json({ message: 'Hello!' })
	* })
	* ```
	*/
	json = (object, arg, headers) => {
		return this.#newResponse(JSON.stringify(object), arg, setDefaultContentType("application/json", headers));
	};
	html = (html, arg, headers) => {
		const res = (html) => this.#newResponse(html, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
		return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
	};
	/**
	* `.redirect()` can Redirect, default status code is 302.
	*
	* @see {@link https://hono.dev/docs/api/context#redirect}
	*
	* @example
	* ```ts
	* app.get('/redirect', (c) => {
	*   return c.redirect('/')
	* })
	* app.get('/redirect-permanently', (c) => {
	*   return c.redirect('/', 301)
	* })
	* ```
	*/
	redirect = (location, status) => {
		const locationString = String(location);
		this.header("Location", !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString));
		return this.newResponse(null, status ?? 302);
	};
	/**
	* `.notFound()` can return the Not Found Response.
	*
	* @see {@link https://hono.dev/docs/api/context#notfound}
	*
	* @example
	* ```ts
	* app.get('/notfound', (c) => {
	*   return c.notFound()
	* })
	* ```
	*/
	notFound = () => {
		this.#notFoundHandler ??= () => createResponseInstance();
		return this.#notFoundHandler(this);
	};
};
// node_modules/hono/dist/compose.js
/**
* Compose middleware functions into a single function based on `koa-compose` package.
*
* @template E - The environment type.
*
* @param {[[Function, unknown], unknown][] | [[Function]][]} middleware - An array of middleware functions and their corresponding parameters.
* @param {ErrorHandler<E>} [onError] - An optional error handler function.
* @param {NotFoundHandler<E>} [onNotFound] - An optional not-found handler function.
*
* @returns {(context: Context, next?: Next) => Promise<Context>} - A composed middleware function.
*/
var compose = (middleware, onError, onNotFound) => {
	return (context, next) => {
		let index = -1;
		return dispatch(0);
		/**
		* Dispatch the middleware functions.
		*
		* @param {number} i - The current index in the middleware array.
		*
		* @returns {Promise<Context>} - A promise that resolves to the context.
		*/
		async function dispatch(i) {
			if (i <= index) throw new Error("next() called multiple times");
			index = i;
			let res;
			let isError = false;
			let handler;
			if (middleware[i]) {
				handler = middleware[i][0][0];
				context.req.routeIndex = i;
			} else handler = i === middleware.length && next || void 0;
			if (handler) try {
				res = await handler(context, () => dispatch(i + 1));
			} catch (err) {
				if (err instanceof Error && onError) {
					context.error = err;
					res = await onError(err, context);
					isError = true;
				} else throw err;
			}
			else if (context.finalized === false && onNotFound) res = await onNotFound(context);
			if (res && (context.finalized === false || isError)) context.res = res;
			return context;
		}
	};
};
// node_modules/hono/dist/helper/route/index.js
/**
* Get matched routes in the handler
*
* @param {Context} c - The context object
* @returns An array of matched routes
*
* @example
* ```ts
* import { matchedRoutes } from 'hono/route'
*
* app.use('*', async function logger(c, next) {
*   await next()
*   matchedRoutes(c).forEach(({ handler, method, path }, i) => {
*     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
*     console.log(
*       method,
*       ' ',
*       path,
*       ' '.repeat(Math.max(10 - path.length, 0)),
*       name,
*       i === c.req.routeIndex ? '<- respond from here' : ''
*     )
*   })
* })
* ```
*/
var matchedRoutes = (c) => c.req[GET_MATCH_RESULT][0].map(([[, route]]) => route);
/**
* Get the route path registered within the handler
*
* @param {Context} c - The context object
* @param {number} index - The index of the route from which to retrieve the path, similar to Array.prototype.at(), where a negative number is the index counted from the end of the matching route. Defaults to the current route index.
* @returns The route path registered within the handler
*
* @example
* ```ts
* import { routePath } from 'hono/route'
*
* app.use('*', (c, next) => {
*   console.log(routePath(c)) // '*'
*   console.log(routePath(c, -1)) // '/posts/:id'
*   return next()
* })
*
* app.get('/posts/:id', (c) => {
*   return c.text(routePath(c)) // '/posts/:id'
* })
* ```
*/
var routePath = (c, index) => matchedRoutes(c).at(index ?? c.req.routeIndex)?.path ?? "";
// node_modules/hono/dist/router.js
/**
* Array of supported HTTP methods.
*/
var METHODS = [
	"get",
	"post",
	"put",
	"delete",
	"options",
	"patch",
	"query"
];
/**
* Error message indicating that a route cannot be added because the matcher is already built.
*/
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
/**
* Error class representing an unsupported path error.
*/
var UnsupportedPathError = class extends Error {};
// node_modules/hono/dist/utils/constants.js
/**
* Constant used to mark a composed handler.
*/
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";
// node_modules/hono/dist/utils/mount.js
var countTrailingSlashes = (path) => {
	let index = path.length;
	while (index > 0 && path.charCodeAt(index - 1) === 47) index--;
	return path.length - index;
};
var getPathPrefixLength = (c, pathPrefix, routePath) => {
	if (!/[:*]/.test(pathPrefix)) return pathPrefix.length;
	const path = c.req.path;
	const matchResult = c.req[GET_MATCH_RESULT];
	const paramNames = /* @__PURE__ */ new Set();
	let length = 0;
	for (const part of splitRoutingPath(pathPrefix)) {
		if (part[0] === ":" && part.endsWith("}?")) throw new Error(`mount(): Optional regular expression parameters are not supported in "${routePath}".`);
		const pattern = getPattern(part);
		if (pattern && pattern !== "*") {
			const name = pattern[1];
			if (paramNames.has(name)) throw new Error(`mount(): Duplicate path parameter "${name}" in "${routePath}".`);
			paramNames.add(name);
		}
		if (pattern && pattern !== "*" && pattern[2] !== true) {
			const value = matchResult.length === 2 ? matchResult[1][matchResult[0][c.req.routeIndex][1][pattern[1]]] : matchResult[0][c.req.routeIndex][1][pattern[1]];
			length += value.length + 1;
		} else if (pattern || part.endsWith("*")) {
			const end = path.indexOf("/", length + 1);
			length = end === -1 ? path.length : end;
		} else length += part.length + 1;
	}
	return length;
};
var createMountedRequest = (c, pathPrefix, routePath) => {
	if (/[^/]\*$/.test(routePath)) throw new Error(`mount(): Wildcard must follow "/" in "${routePath}".`);
	const prefixLength = getPathPrefixLength(c, pathPrefix, routePath);
	const path = c.req.path.slice(prefixLength) || "/";
	if (prefixLength > c.req.path.length || path[0] !== "/" || /\/(?:\.|%2e){1,2}(?:\/|$)/i.test(path)) throw new HTTPException(400, { message: "Invalid mounted path" });
	const rawUrl = c.req.raw.url;
	if (/^[^/?#]*\/\/[^/?#\\]*[?#\\]/.test(rawUrl)) throw new HTTPException(400, { message: "Invalid mounted path" });
	const rawPathEnd = rawUrl.search(/[?#]/);
	const rawTrailingSlashes = countTrailingSlashes(rawPathEnd === -1 ? rawUrl : rawUrl.slice(0, rawPathEnd));
	if (rawTrailingSlashes > 1 && countTrailingSlashes(c.req.path) === rawTrailingSlashes - 1) throw new HTTPException(400, { message: "Invalid mounted path" });
	const url = new URL(rawUrl);
	url.pathname = path.replace(/[\\\t\n\r]/g, encodeURIComponent);
	if (path.includes("%")) {}
	return new Request(url, c.req.raw);
};
// node_modules/hono/dist/hono-base.js
/**
* @module
* This module is the base module for the Hono object.
*/
var notFoundHandler = (c) => {
	return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
	if ("getResponse" in err) {
		const res = err.getResponse();
		return c.newResponse(res.body, res);
	}
	console.error(err);
	return c.text("Internal Server Error", 500);
};
var Hono$1 = class Hono {
	get;
	post;
	put;
	delete;
	options;
	patch;
	query;
	all;
	on;
	use;
	router;
	getPath;
	_basePath = "/";
	#path = "/";
	routes = [];
	constructor(options = {}) {
		[...METHODS, "all"].forEach((method) => {
			this[method] = (args1, ...args) => {
				const methodName = method.toUpperCase();
				if (typeof args1 === "string") this.#path = args1;
				else this.#addRoute(methodName, this.#path, args1);
				args.forEach((handler) => {
					this.#addRoute(methodName, this.#path, handler);
				});
				return this;
			};
		});
		this.on = (method, path, ...handlers) => {
			for (const p of [path].flat()) {
				this.#path = p;
				for (const m of [method].flat()) {
					const methodName = m.toUpperCase();
					for (const handler of handlers) this.#addRoute(methodName, this.#path, handler);
				}
			}
			return this;
		};
		this.use = (arg1, ...handlers) => {
			if (typeof arg1 === "string") this.#path = arg1;
			else {
				this.#path = "*";
				handlers.unshift(arg1);
			}
			handlers.forEach((handler) => {
				this.#addRoute("ALL", this.#path, handler);
			});
			return this;
		};
		const { strict, ...optionsWithoutStrict } = options;
		Object.assign(this, optionsWithoutStrict);
		this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
	}
	#clone() {
		const clone = new Hono({
			router: this.router,
			getPath: this.getPath
		});
		clone.errorHandler = this.errorHandler;
		clone.#notFoundHandler = this.#notFoundHandler;
		clone.routes = this.routes;
		return clone;
	}
	#notFoundHandler = notFoundHandler;
	errorHandler = errorHandler;
	/**
	* `.route()` allows grouping other Hono instance in routes.
	*
	* @see {@link https://hono.dev/docs/api/routing#grouping}
	*
	* @param {string} path - base Path
	* @param {Hono} app - other Hono instance
	* @returns {Hono} routed Hono instance
	*
	* @example
	* ```ts
	* const app = new Hono()
	* const app2 = new Hono()
	*
	* app2.get("/user", (c) => c.text("user"))
	* app.route("/api", app2) // GET /api/user
	* ```
	*/
	route(path, app) {
		const subApp = this.basePath(path);
		app.routes.map((r) => {
			let handler;
			if (app.errorHandler === errorHandler) handler = r.handler;
			else {
				handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
				handler[COMPOSED_HANDLER] = r.handler;
			}
			subApp.#addRoute(r.method, r.path, handler, r.basePath);
		});
		return this;
	}
	/**
	* `.basePath()` allows base paths to be specified.
	*
	* @see {@link https://hono.dev/docs/api/routing#base-path}
	*
	* @param {string} path - base Path
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* const api = new Hono().basePath('/api')
	* ```
	*/
	basePath(path) {
		const subApp = this.#clone();
		subApp._basePath = mergePath(this._basePath, path);
		return subApp;
	}
	/**
	* `.onError()` handles an error and returns a customized Response.
	*
	* @see {@link https://hono.dev/docs/api/hono#error-handling}
	*
	* @param {ErrorHandler} handler - request Handler for error
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* app.onError((err, c) => {
	*   console.error(`${err}`)
	*   return c.text('Custom Error Message', 500)
	* })
	* ```
	*/
	onError = (handler) => {
		this.errorHandler = handler;
		return this;
	};
	/**
	* `.notFound()` allows you to customize a Not Found Response.
	*
	* @see {@link https://hono.dev/docs/api/hono#not-found}
	*
	* @param {NotFoundHandler} handler - request handler for not-found
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* app.notFound((c) => {
	*   return c.text('Custom 404 Message', 404)
	* })
	* ```
	*/
	notFound = (handler) => {
		this.#notFoundHandler = handler;
		return this;
	};
	/**
	* `.mount()` allows you to mount applications built with other frameworks into your Hono application.
	*
	* @deprecated Use `mount()` from `hono/mount` instead. `.mount()` will be removed in v5.
	*
	* @see {@link https://hono.dev/docs/api/hono#mount}
	*
	* @param {string} path - base Path
	* @param {Function} applicationHandler - other Request Handler
	* @param {MountOptions} [options] - options of `.mount()`
	* @returns {Hono} mounted Hono instance
	* @throws {Error} If automatic request rewriting encounters duplicate path parameter names or an optional regular expression parameter.
	* @throws {HTTPException} With status 400 if automatic request rewriting cannot safely preserve the routed path.
	*
	* @example
	* ```ts
	* import { Router as IttyRouter } from 'itty-router'
	* import { Hono } from 'hono'
	* // Create itty-router application
	* const ittyRouter = IttyRouter()
	* // GET /itty-router/hello
	* ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
	*
	* const app = new Hono()
	* app.mount('/itty-router', ittyRouter.handle)
	* ```
	*
	* @example
	* ```ts
	* const app = new Hono()
	* // Send the request to another application without modification.
	* app.mount('/app', anotherApp, {
	*   replaceRequest: (req) => req,
	* })
	* ```
	*/
	mount(path, applicationHandler, options) {
		let replaceRequest;
		let optionHandler;
		if (options) {
			if (typeof options === "function") optionHandler = options;
			else {
				optionHandler = options.optionHandler;
				if (options.replaceRequest === false) replaceRequest = (request) => request;
				else replaceRequest = options.replaceRequest;
			}
		}
		const getOptions = optionHandler ? (c) => {
			const options = optionHandler(c);
			return Array.isArray(options) ? options : [options];
		} : (c) => {
			let executionContext = void 0;
			try {
				executionContext = c.executionCtx;
			} catch {}
			return [c.env, executionContext];
		};
		const defaultReplaceRequest = (c) => {
			const mountedRoutePath = routePath(c);
			return createMountedRequest(c, mountedRoutePath.replace(/\/?\*$/, ""), mountedRoutePath);
		};
		const handler = async (c, next) => {
			const res = await applicationHandler(replaceRequest ? replaceRequest(c.req.raw) : defaultReplaceRequest(c), ...getOptions(c));
			if (res) return res;
			await next();
		};
		this.#addRoute("ALL", mergePath(path, "*"), handler);
		return this;
	}
	#addRoute(method, path, handler, baseRoutePath) {
		path = mergePath(this._basePath, path);
		const r = {
			basePath: baseRoutePath !== void 0 ? mergePath(this._basePath, baseRoutePath) : this._basePath,
			path,
			method,
			handler
		};
		this.router.add(method, path, [handler, r]);
		this.routes.push(r);
	}
	#handleError(err, c) {
		if (err instanceof Error) return this.errorHandler(err, c);
		throw err;
	}
	#dispatch(request, executionCtx, env, method) {
		if (method === "HEAD") return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
		const path = this.getPath(request, { env });
		const matchResult = this.router.match(method, path);
		const c = new Context(request, {
			path,
			matchResult,
			env,
			executionCtx,
			notFoundHandler: this.#notFoundHandler
		});
		if (matchResult[0].length === 1) {
			let res;
			try {
				res = matchResult[0][0][0][0](c, async () => {
					c.res = await this.#notFoundHandler(c);
				});
			} catch (err) {
				return this.#handleError(err, c);
			}
			return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
		}
		const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
		return (async () => {
			try {
				const context = await composed(c);
				if (!context.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
				return context.res;
			} catch (err) {
				return this.#handleError(err, c);
			}
		})();
	}
	/**
	* `.fetch()` will be entry point of your app.
	*
	* @see {@link https://hono.dev/docs/api/hono#fetch}
	*
	* @param {Request} request - request Object of request
	* @param {Env} env - env Object
	* @param {ExecutionContext} executionCtx - context of execution
	* @returns {Response | Promise<Response>} response of request
	*
	*/
	fetch = (request, ...rest) => {
		return this.#dispatch(request, rest[1], rest[0], request.method);
	};
	/**
	* `.request()` is a useful method for testing.
	* You can pass a URL or pathname to send a GET request.
	* app will return a Response object.
	* ```ts
	* test('GET /hello is ok', async () => {
	*   const res = await app.request('/hello')
	*   expect(res.status).toBe(200)
	* })
	* ```
	* @see https://hono.dev/docs/api/hono#request
	*/
	request = (input, requestInit, Env, executionCtx) => {
		if (input instanceof Request) return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
		input = input.toString();
		return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
	};
	/**
	* `.fire()` automatically adds a global fetch event listener.
	* This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
	* @deprecated
	* Use `fire` from `hono/service-worker` instead.
	* ```ts
	* import { Hono } from 'hono'
	* import { fire } from 'hono/service-worker'
	*
	* const app = new Hono()
	* // ...
	* fire(app)
	* ```
	* @see https://hono.dev/docs/api/hono#fire
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
	* @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
	*/
	fire = () => {
		addEventListener("fetch", (event) => {
			event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
		});
	};
};
// node_modules/hono/dist/router/utils.js
var createNullObject = () => Object.create(null);
// node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path) {
	const matchers = this.buildAllMatchers();
	const match = ((method, path) => {
		const matcher = matchers[method] || matchers["ALL"];
		const staticMatch = matcher[2][path];
		if (staticMatch) return staticMatch;
		const match = path.match(matcher[0]);
		if (!match) return [[], emptyParam];
		const index = match.indexOf("", 1);
		return [matcher[1][index], match];
	});
	this.match = match;
	return match(method, path);
}
// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = "[^]*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/[^]*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = /* @__PURE__ */ new Set(".\\+*[^]$()");
/**
* Sort order:
* 1. literal
* 2. special pattern (e.g. :label{[0-9]+})
* 3. common label pattern (e.g. :label)
* 4. wildcard
*/
function compareKey(a, b) {
	if (a.length === 1) return b.length === 1 ? a < b ? -1 : 1 : -1;
	if (b.length === 1) return 1;
	if (a === "[^]*" || a === "(?:|/[^]*)") return b === "[^]*" ? -1 : 1;
	else if (b === "[^]*" || b === "(?:|/[^]*)") return -1;
	if (a === "[^/]+") return 1;
	else if (b === "[^/]+") return -1;
	return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node$1 = class Node {
	#index;
	#varIndex;
	#children = createNullObject();
	insert(tokens, index, paramMap, context, keys) {
		let node = this;
		for (let i = 0, len = tokens.length; i < len; i++) {
			const token = tokens[i];
			const pattern = token.length === 1 ? token === "*" ? i === len - 1 ? [
				"",
				"",
				ONLY_WILDCARD_REG_EXP_STR
			] : [
				"",
				"",
				LABEL_REG_EXP_STR
			] : null : token === "/*" ? [
				"",
				"",
				TAIL_WILDCARD_REG_EXP_STR
			] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
			let nextNode;
			if (pattern) {
				const name = pattern[1];
				let regexpStr = pattern[2] || "[^/]+";
				if (name && pattern[2]) {
					if (new RegExp(regexpStr).test("")) throw PATH_ERROR;
					regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
					if (/\((?!\?:)/.test(regexpStr)) throw PATH_ERROR;
					if (regexpStr.length === 1 && regExpMetaChars.has(regexpStr)) throw PATH_ERROR;
				}
				keys.push(regexpStr);
				nextNode = node.#children[regexpStr];
				if (!nextNode) {
					if (regexpStr !== "[^]*" && regexpStr !== "(?:|/[^]*)") {
						for (const k in node.#children) if ((regexpStr.length > 1 || k.length > 1) && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
					}
					nextNode = node.#children[regexpStr] = new Node();
				}
				if (name !== "") {
					nextNode.#varIndex ??= context.varIndex++;
					paramMap.push([name, nextNode.#varIndex]);
				}
			} else {
				keys.push(token);
				nextNode = node.#children[token];
				if (!nextNode) {
					for (const k in node.#children) if (k.length > 1 && k !== "[^]*" && k !== "(?:|/[^]*)") throw PATH_ERROR;
					nextNode = node.#children[token] = new Node();
				}
			}
			node = nextNode;
		}
		if (node.#index !== void 0) throw PATH_ERROR;
		node.#index = index;
	}
	buildRegExpStr() {
		const strList = Object.keys(this.#children).sort(compareKey).map((k) => {
			const c = this.#children[k];
			const childStr = c.buildRegExpStr();
			return childStr === "" ? "" : (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + childStr;
		}).filter(Boolean);
		if (typeof this.#index === "number" && this.#index !== -1) strList.unshift(`#${this.#index}`);
		if (strList.length === 0) return "";
		if (strList.length === 1) return strList[0];
		return "(?:" + strList.join("|") + ")";
	}
};
// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
	#context = { varIndex: 0 };
	#root = new Node$1();
	#index = 0;
	paths = createNullObject();
	insert(path, isStatic) {
		const keys = [];
		if (isStatic) {
			this.#root.insert(path.split(""), -1, [], this.#context, keys);
			this.paths[path] = [
				-1,
				[],
				keys
			];
			return;
		}
		const paramAssoc = [];
		const groups = [];
		let markedPath = path;
		for (let i = 0;;) {
			let replaced = false;
			markedPath = markedPath.replace(/\{(?:\{[\d,]+\}|[^}])+\}/g, (m) => {
				const mark = `@\\${i}`;
				groups[i] = [mark, m];
				i++;
				replaced = true;
				return mark;
			});
			if (!replaced) break;
		}
		/**
		*  - pattern (:label, :label{0-9]+}, ...)
		*  - /* wildcard
		*  - character
		*/
		const tokens = markedPath.match(/(?::[^\/]+)|(?:\/\*$)|./gs) || [];
		for (let i = groups.length - 1; i >= 0; i--) {
			const [mark] = groups[i];
			for (let j = tokens.length - 1; j >= 0; j--) if (tokens[j].indexOf(mark) !== -1) {
				tokens[j] = tokens[j].replace(mark, groups[i][1]);
				break;
			}
		}
		this.#root.insert(tokens, this.#index, paramAssoc, this.#context, keys);
		this.paths[path] = [
			this.#index++,
			paramAssoc,
			keys
		];
	}
	buildRegExp() {
		let regexp = this.#root.buildRegExpStr();
		if (regexp === "") return [
			/^$/,
			[],
			[]
		];
		let captureIndex = 0;
		const indexReplacementMap = [];
		const paramReplacementMap = [];
		regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
			if (handlerIndex !== void 0) {
				indexReplacementMap[++captureIndex] = Number(handlerIndex);
				return "$()";
			}
			if (paramIndex !== void 0) {
				paramReplacementMap[Number(paramIndex)] = ++captureIndex;
				return "";
			}
			return "";
		});
		return [
			new RegExp(`^${regexp}`),
			indexReplacementMap,
			paramReplacementMap
		];
	}
};
// node_modules/hono/dist/router/reg-exp-router/router.js
function endsWithWildcard(keys) {
	const tail = keys[keys.length - 1];
	return tail === "[^]*" || tail === "(?:|/[^]*)";
}
function covers(wildcard, target) {
	const last = wildcard.length - 1;
	for (let i = 0; i < last; i++) if (wildcard[i] !== target[i]) return false;
	return wildcard[last] === "[^]*" || target.length === last || target[last] === "/";
}
var RegExpRouter = class {
	name = "RegExpRouter";
	#handlers;
	#tries;
	constructor() {
		this.#handlers = { ["ALL"]: [] };
		this.#tries = { ["ALL"]: new Trie() };
	}
	#insertPath(method, path) {
		try {
			this.#tries[method].insert(path, !/\*|\/:/.test(path));
		} catch (e) {
			throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
		}
	}
	add(method, path, handler) {
		const handlers = this.#handlers;
		if (!handlers) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
		const tries = this.#tries;
		if (!handlers[method]) {
			tries[method] = new Trie();
			handlers[method] = [...handlers["ALL"]];
			for (const p in tries["ALL"].paths) this.#insertPath(method, p);
		}
		if (path === "/*") path = "*";
		const methods = method === "ALL" ? Object.keys(handlers) : [method];
		const paths = checkOptionalParameter(path) || [path];
		for (const path of paths) for (const m of methods) {
			if (!tries[m].paths[path]) this.#insertPath(m, path);
			handlers[m].push([handler, path]);
		}
	}
	match = match;
	buildAllMatchers() {
		const matchers = createNullObject();
		for (const method of Object.keys(this.#handlers)) matchers[method] = this.#buildMatcher(method);
		this.#handlers = this.#tries = void 0;
		return matchers;
	}
	#buildMatcher(method) {
		const handlers = this.#handlers[method];
		const trie = this.#tries[method];
		const staticMap = createNullObject();
		const handlerData = [];
		const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
		const own = createNullObject();
		const entries = handlers.map(([h, p], i) => {
			(own[p] ??= []).push(i);
			return [h, trie.paths[p][1].reduceRight((map, [key, varIndex]) => {
				map[key] = paramReplacementMap[varIndex];
				return map;
			}, createNullObject())];
		});
		const wildcards = Object.keys(own).filter((p) => endsWithWildcard(trie.paths[p][2]));
		for (const path in trie.paths) {
			const [index, , keys] = trie.paths[path];
			const indexes = [...own[path]];
			for (const p of wildcards) if (p !== path && covers(trie.paths[p][2], keys)) indexes.push(...own[p]);
			const data = indexes.sort((a, b) => a - b).map((i) => entries[i]);
			if (index === -1) {
				const last = Math.max(-1, ...data.flatMap(([, map]) => Object.values(map)));
				staticMap[path] = [data, last === -1 ? emptyParam : path.match(regexp).slice(0, last + 1)];
			} else handlerData[index] = data;
		}
		return [
			regexp,
			indexReplacementMap.map((i) => handlerData[i]),
			staticMap
		];
	}
};
// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
	name = "SmartRouter";
	#routers = [];
	#routes = [];
	constructor(init) {
		this.#routers = init.routers;
	}
	add(method, path, handler) {
		if (!this.#routes) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
		this.#routes.push([
			method,
			path,
			handler
		]);
	}
	match(method, path) {
		if (!this.#routes) throw new Error("Fatal error");
		const routers = this.#routers;
		const routes = this.#routes;
		const len = routers.length;
		let i = 0;
		let res;
		for (; i < len; i++) {
			const router = routers[i];
			try {
				for (let i = 0, len = routes.length; i < len; i++) router.add(...routes[i]);
				res = router.match(method, path);
			} catch (e) {
				if (e instanceof UnsupportedPathError) continue;
				throw e;
			}
			this.match = router.match.bind(router);
			this.#routers = [router];
			this.#routes = void 0;
			break;
		}
		if (i === len) throw new Error("Fatal error");
		this.name = `SmartRouter + ${this.activeRouter.name}`;
		return res;
	}
	get activeRouter() {
		if (this.#routes || this.#routers.length !== 1) throw new Error("No active router has been determined yet.");
		return this.#routers[0];
	}
};
// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = createNullObject();
var order = 0;
var Node = class Node {
	#methods = [];
	#children = createNullObject();
	#patterns = [];
	#pattern;
	#params = emptyParams;
	insert(method, path, handler) {
		let curNode = this;
		const parts = splitRoutingPath(path);
		const possibleKeys = /* @__PURE__ */ new Set();
		let i = 0;
		for (const p of parts) {
			const nextP = parts[++i];
			const pattern = getPattern(p, nextP) || (nextP === void 0 && p && p.indexOf("*") === p.length - 1 ? p : null);
			const isParam = Array.isArray(pattern);
			const key = isParam ? pattern[0] : pattern || p;
			const child = curNode.#children[key] ||= new Node();
			if (pattern && !child.#pattern) {
				child.#pattern = pattern;
				curNode.#patterns.push(child);
			}
			curNode = child;
			if (isParam) possibleKeys.add(pattern[1]);
		}
		curNode.#methods.push({ [method]: {
			handler,
			possibleKeys: [...possibleKeys],
			score: ++order
		} });
	}
	#pushHandlerSets(handlerSets, node, method, nodeParams, params) {
		for (let i = 0, len = node.#methods.length; i < len; i++) {
			const m = node.#methods[i];
			const handlerSet = m[method] || m["ALL"];
			if (handlerSet) {
				handlerSet.params = createNullObject();
				handlerSets.push(handlerSet);
				for (let i = 0, len = handlerSet.possibleKeys.length; i < len; i++) {
					const key = handlerSet.possibleKeys[i];
					handlerSet.params[key] = params?.[key] && !i ? params[key] : nodeParams[key] ?? params?.[key];
				}
			}
		}
	}
	search(method, path) {
		const handlerSets = [];
		this.#params = emptyParams;
		let curNodes = [this];
		const parts = splitPath(path);
		const curNodesQueue = [];
		const len = parts.length;
		let partOffsets = null;
		for (let i = 0; i < len; i++) {
			const part = parts[i];
			const isLast = i === len - 1;
			const tempNodes = [];
			for (let j = 0, len2 = curNodes.length; j < len2; j++) {
				const node = curNodes[j];
				const nextNode = node.#children[part];
				if (nextNode) {
					nextNode.#params = node.#params;
					if (isLast) {
						if (nextNode.#children["*"]) this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
						this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
					} else tempNodes.push(nextNode);
				}
				for (const child of node.#patterns) {
					const pattern = child.#pattern;
					const params = node.#params === emptyParams ? {} : { ...node.#params };
					if (typeof pattern === "string") {
						if (pattern === "*" || part.startsWith(pattern.slice(0, -1))) {
							this.#pushHandlerSets(handlerSets, child, method, node.#params);
							if (pattern === "*") {
								child.#params = params;
								tempNodes.push(child);
							}
						}
						continue;
					}
					const [, name, matcher] = pattern;
					if (!part && matcher === true) continue;
					if (matcher !== true) {
						if (!partOffsets) {
							partOffsets = [];
							let offset = path[0] === "/" ? 1 : 0;
							for (let p = 0; p < len; p++) {
								partOffsets[p] = offset;
								offset += parts[p].length + 1;
							}
						}
						const restPathString = path.slice(partOffsets[i]);
						const m = matcher.exec(restPathString);
						if (m) {
							if (!Object.hasOwn(params, name)) params[name] = m[0];
							this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
							if (m[0].length === restPathString.length && child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, node.#params, params);
							for (const _ in child.#children) {
								child.#params = params;
								const componentCount = m[0].match(/\//g)?.length ?? 0;
								(curNodesQueue[componentCount] ||= []).push(child);
								break;
							}
							continue;
						}
					}
					if (matcher === true || matcher.test(part)) {
						if (!Object.hasOwn(params, name)) params[name] = part;
						if (isLast) {
							this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
							if (child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, params, node.#params);
						} else {
							child.#params = params;
							tempNodes.push(child);
						}
					}
				}
			}
			const shifted = curNodesQueue.shift();
			curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
		}
		if (handlerSets[1]) handlerSets.sort((a, b) => {
			return a.score - b.score;
		});
		return [handlerSets.map(({ handler, params }) => [handler, params])];
	}
};
// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
	name = "TrieRouter";
	#node = new Node();
	add(method, path, handler) {
		for (const result of checkOptionalParameter(path) || [path]) this.#node.insert(method, result, handler);
	}
	match(method, path) {
		return this.#node.search(method, path);
	}
};
// node_modules/hono/dist/hono.js
/**
* The Hono class extends the functionality of the HonoBase class.
* It sets up routing and allows for custom options to be passed.
*
* @template E - The environment type.
* @template S - The schema type.
* @template BasePath - The base path type.
*/
var Hono = class extends Hono$1 {
	/**
	* Creates an instance of the Hono class.
	*
	* @param options - Optional configuration options for the Hono instance.
	*/
	constructor(options = {}) {
		super(options);
		this.router = options.router ?? new SmartRouter({ routers: [new RegExpRouter(), new TrieRouter()] });
	}
};
// backend/worker/src/csrf.ts
/** Same-origin check equivalent to Python Handler.same_origin. */
function sameOrigin(request) {
	const url = new URL(request.url);
	const host = request.headers.get("Host") || url.host;
	const origin = request.headers.get("Origin");
	if (origin && origin !== "null") try {
		return new URL(origin).host === host;
	} catch {
		return false;
	}
	const site = request.headers.get("Sec-Fetch-Site");
	if (site) return site === "same-origin" || site === "none";
	const ref = request.headers.get("Referer");
	if (!ref) return false;
	try {
		return new URL(ref).host === host;
	} catch {
		return false;
	}
}
function isMutating(method) {
	return ![
		"GET",
		"HEAD",
		"OPTIONS"
	].includes(method.toUpperCase());
}
// backend/worker/src/schema_extra.ts
/** Extra tables used by posting, community, claims, quotes, reports and mail. Safe to call on every request. */
var TABLES = [
	`CREATE TABLE IF NOT EXISTS auto_news(
    record_id INTEGER PRIMARY KEY, enabled INTEGER NOT NULL DEFAULT 0, feed TEXT DEFAULT '',
    updated TEXT, updated_by INTEGER, last_run TEXT, last_note TEXT DEFAULT '')`,
	`CREATE TABLE IF NOT EXISTS comments(
    id INTEGER PRIMARY KEY, record_id INTEGER NOT NULL, user_id INTEGER, body TEXT,
    status TEXT NOT NULL DEFAULT 'approved', created TEXT, decided TEXT)`,
	`CREATE TABLE IF NOT EXISTS likes(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, record_id))`,
	`CREATE TABLE IF NOT EXISTS saves(user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, record_id))`,
	`CREATE TABLE IF NOT EXISTS follows(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`,
	`CREATE TABLE IF NOT EXISTS user_follows(follower_id INTEGER NOT NULL, followee_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(follower_id, followee_id))`,
	`CREATE TABLE IF NOT EXISTS watch_sources(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, ref TEXT NOT NULL, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS reports(
    id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT, target_id INTEGER,
    reason TEXT DEFAULT '', note TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'open',
    action TEXT DEFAULT '', created TEXT, decided TEXT)`,
	`CREATE TABLE IF NOT EXISTS meet_requests(
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, who_kind TEXT DEFAULT 'either', who_role TEXT DEFAULT '',
    org_group TEXT DEFAULT '', org_id INTEGER, topic TEXT DEFAULT '', why TEXT DEFAULT '',
    location TEXT DEFAULT '', by_when TEXT DEFAULT '', status TEXT NOT NULL DEFAULT 'pending',
    admin_note TEXT DEFAULT '', created TEXT, decided TEXT, handled_by INTEGER, contact_email TEXT DEFAULT '')`,
	`CREATE TABLE IF NOT EXISTS claim_codes(
    id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, record_id INTEGER NOT NULL, email TEXT NOT NULL,
    code_hash TEXT NOT NULL, created TEXT NOT NULL, tries INTEGER NOT NULL DEFAULT 0, used INTEGER NOT NULL DEFAULT 0)`,
	`CREATE TABLE IF NOT EXISTS referrals(
    id INTEGER PRIMARY KEY, record_id INTEGER, user_id INTEGER, ref TEXT, payload TEXT DEFAULT '{}',
    status TEXT DEFAULT 'new', created TEXT, updated TEXT, note TEXT DEFAULT '')`,
	`CREATE TABLE IF NOT EXISTS email_log(
    id INTEGER PRIMARY KEY, to_addr TEXT NOT NULL, subject TEXT, text_body TEXT, html_body TEXT,
    provider TEXT, status TEXT, error TEXT, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS owners(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`,
	`CREATE TABLE IF NOT EXISTS room_chat(
    id INTEGER PRIMARY KEY, room TEXT NOT NULL, user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
    pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0)`,
	`CREATE INDEX IF NOT EXISTS ix_room_chat ON room_chat(room, rev)`,
	`CREATE TABLE IF NOT EXISTS room_presence(room TEXT, cid TEXT, user_id INTEGER, seen REAL, PRIMARY KEY(room, cid))`,
	`CREATE TABLE IF NOT EXISTS chat(
    id INTEGER PRIMARY KEY, event_id INTEGER NOT NULL, user_id INTEGER, name TEXT, body TEXT, created TEXT, ts REAL,
    pinned INTEGER DEFAULT 0, deleted INTEGER DEFAULT 0, rev INTEGER DEFAULT 0)`,
	`CREATE INDEX IF NOT EXISTS ix_chat_ev ON chat(event_id, rev)`,
	`CREATE TABLE IF NOT EXISTS presence(
    event_id INTEGER, cid TEXT, user_id INTEGER, name TEXT, seen REAL, PRIMARY KEY(event_id, cid))`,
	`CREATE TABLE IF NOT EXISTS email_tokens(
    token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, email TEXT DEFAULT '',
    expires TEXT, created TEXT, used INTEGER DEFAULT 0)`
];
var COLS = [
	[
		"auto_news",
		"seen",
		"TEXT DEFAULT '[]'"
	],
	[
		"comments",
		"decided",
		"TEXT"
	],
	[
		"meet_requests",
		"contact_email",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"who_kind",
		"TEXT DEFAULT 'either'"
	],
	[
		"meet_requests",
		"org_id",
		"INTEGER"
	],
	[
		"meet_requests",
		"user_id",
		"INTEGER"
	],
	[
		"meet_requests",
		"who_role",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"org_group",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"topic",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"why",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"location",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"by_when",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"admin_note",
		"TEXT DEFAULT ''"
	],
	[
		"meet_requests",
		"created",
		"TEXT"
	],
	[
		"meet_requests",
		"decided",
		"TEXT"
	],
	[
		"meet_requests",
		"handled_by",
		"INTEGER"
	],
	[
		"reports",
		"user_id",
		"INTEGER"
	],
	[
		"reports",
		"kind",
		"TEXT"
	],
	[
		"reports",
		"target_id",
		"INTEGER"
	],
	[
		"reports",
		"reason",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"note",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"action",
		"TEXT DEFAULT ''"
	],
	[
		"reports",
		"created",
		"TEXT"
	],
	[
		"reports",
		"decided",
		"TEXT"
	]
];
var ready = null;
async function ensureExtraSchema(db) {
	ready ||= /* @__PURE__ */ new WeakSet();
	if (ready.has(db)) return;
	for (const sql of TABLES) try {
		await db.prepare(sql).run();
	} catch {}
	for (const [tbl, col, typ] of COLS) try {
		await db.prepare(`ALTER TABLE ${tbl} ADD COLUMN ${col} ${typ}`).run();
	} catch {}
	ready.add(db);
}
// backend/worker/src/env.ts
function envFlag(env, key, fallback = false) {
	const v = env[key];
	if (v == null || v === "") return fallback;
	const s = String(v).trim().toLowerCase();
	if ([
		"0",
		"false",
		"no",
		"off"
	].includes(s)) return false;
	if ([
		"1",
		"true",
		"yes",
		"on"
	].includes(s)) return true;
	return fallback;
}
function envNumber(env, key, fallback) {
	const n = Number(env[key]);
	return Number.isFinite(n) && n > 0 ? n : fallback;
}
// backend/worker/src/session.ts
var session_exports = /* @__PURE__ */ __exportAll({
	endSession: () => endSession,
	isSuspended: () => isSuspended,
	jsonUser: () => jsonUser,
	parseCookies: () => parseCookies,
	setting: () => setting$1,
	suspensionText: () => suspensionText
});
var AUTH_DDL = [
	`CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, created TEXT, user_id INTEGER, last_seen TEXT, ip TEXT DEFAULT '', ua TEXT DEFAULT '', hashed INTEGER DEFAULT 0)`,
	`CREATE TABLE IF NOT EXISTS email_tokens(token TEXT PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, email TEXT DEFAULT '', expires TEXT NOT NULL, used INTEGER DEFAULT 0, created TEXT)`,
	`CREATE TABLE IF NOT EXISTS settings(key TEXT PRIMARY KEY, value TEXT)`,
	`CREATE TABLE IF NOT EXISTS submissions(id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, kind TEXT NOT NULL, target_id INTEGER, payload TEXT, status TEXT NOT NULL DEFAULT 'pending', note TEXT DEFAULT '', created TEXT, decided TEXT, decided_by INTEGER, result_id INTEGER)`,
	`CREATE TABLE IF NOT EXISTS owners(user_id INTEGER NOT NULL, company_id INTEGER NOT NULL, created TEXT, PRIMARY KEY(user_id, company_id))`
];
var schemaReady = null;
async function ensureAuthSchema(db) {
	schemaReady ||= /* @__PURE__ */ new WeakSet();
	if (schemaReady.has(db)) return;
	for (const sql of AUTH_DDL) await db.prepare(sql).run();
	const cols = await db.prepare("PRAGMA table_info(users)").all();
	const have = new Set((cols.results || []).map((c) => c.name));
	for (const [name, typ] of [
		["totp", "TEXT DEFAULT ''"],
		["totp_step", "INTEGER DEFAULT 0"],
		["recovery", "TEXT DEFAULT '[]'"],
		["suspended_until", "TEXT DEFAULT ''"],
		["suspend_reason", "TEXT DEFAULT ''"]
	]) if (!have.has(name)) try {
		await db.prepare(`ALTER TABLE users ADD COLUMN ${name} ${typ}`).run();
	} catch {}
	schemaReady.add(db);
}
function emptyAuth(ip = "", https = false) {
	return {
		user: null,
		role: "",
		is_admin: false,
		logged: false,
		perms: /* @__PURE__ */ new Set(),
		see_private: false,
		needs_2fa: false,
		ip,
		https
	};
}
function clientIp$2(request) {
	return request.headers.get("CF-Connecting-IP") || (request.headers.get("X-Forwarded-For") || "").split(",")[0].trim() || "127.0.0.1";
}
function isHttps(request, env) {
	if (envFlag(env, "EP_SECURE_COOKIES")) return true;
	if (request.headers.get("X-Forwarded-Proto") === "https") return true;
	if ((request.headers.get("CF-Visitor") || "").includes("\"https\"")) return true;
	return new URL(request.url).protocol === "https:";
}
function parseCookies(request) {
	const out = {};
	for (const part of (request.headers.get("Cookie") || "").split(";")) {
		if (!part.includes("=")) continue;
		const [k, ...rest] = part.trim().split("=");
		out[k] = rest.join("=");
	}
	return out;
}
function sidCookie(tok, https, maxAge = 7776e3) {
	return `hi_sid=${tok}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function clearSidCookie(https) {
	return `hi_sid=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function parseTs(s) {
	if (!s) return null;
	const t = Date.parse(String(s).slice(0, 19).replace(" ", "T"));
	return Number.isFinite(t) ? t : null;
}
function isSuspended(u) {
	const until = u?.suspended_until || "";
	if (!until) return false;
	if (until === "forever") return true;
	const t = parseTs(until);
	return Boolean(t && t > Date.now());
}
function suspensionText(u) {
	return `This account is suspended ${u.suspended_until === "forever" ? "until further notice" : `until ${String(u.suspended_until).slice(0, 10)}`}. Reason: ${u.suspend_reason || "No reason given."}`;
}
function twoFactorRequired(_env, _u) {
	return false;
}
function prefsOf(u) {
	try {
		return JSON.parse(u?.prefs || "{}");
	} catch {
		return {};
	}
}
function permsOf(u, isAdmin) {
	if (isAdmin) return new Set(CONTRIB_PERMS.map(([k]) => k));
	if (u?.role !== "contributor") return /* @__PURE__ */ new Set();
	const raw = prefsOf(u).perms;
	return new Set(Array.isArray(raw) ? raw.map(String) : []);
}
function can(auth, perm) {
	return auth.is_admin || auth.perms.has(perm);
}
function buildAuth(user, env, ip, https) {
	const auth = emptyAuth(ip, https);
	if (!user) return auth;
	auth.user = user;
	let role = user.role || "";
	auth.is_admin = role === "admin";
	auth.perms = permsOf(user, auth.is_admin);
	if (twoFactorRequired(env, user) && !user.totp) {
		auth.is_admin = false;
		auth.perms = /* @__PURE__ */ new Set();
		role = "user";
		auth.needs_2fa = true;
	}
	auth.role = role;
	auth.logged = auth.is_admin || role === "contributor";
	auth.see_private = auth.is_admin || auth.perms.has("private");
	return auth;
}
async function pruneExpired(db) {
	const t = Date.now();
	const old = (/* @__PURE__ */ new Date(t - 7776e6)).toISOString().slice(0, 19).replace("T", " ");
	const idle = (/* @__PURE__ */ new Date(t - 7776e6)).toISOString().slice(0, 19).replace("T", " ");
	await db.prepare("DELETE FROM sessions WHERE created < ? OR COALESCE(last_seen, created) < ?").bind(old, idle).run();
}
async function newSession(db, uid, ip, ua) {
	await pruneExpired(db);
	const tok = token();
	const ts = nowStamp();
	await db.prepare("INSERT INTO sessions(token, created, user_id, last_seen, ip, ua, hashed) VALUES(?,?,?,?,?,?,1)").bind(tokenHash(tok), ts, uid, ts, ip, (ua || "").slice(0, 200)).run();
	return tok;
}
async function sessionUser(db, tok, ip) {
	if (!tok) return null;
	const th = tokenHash(tok);
	const row = await db.prepare("SELECT u.*, s.created AS s_created, s.last_seen AS s_seen FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?").bind(th).first();
	if (!row) return null;
	const created = parseTs(row.s_created);
	const seen = parseTs(row.s_seen || row.s_created);
	const t = Date.now();
	if (row.disabled || isSuspended(row) || !created || t - created > 7776e6 || !seen || t - seen > 7776e6) {
		await db.prepare("DELETE FROM sessions WHERE token=?").bind(th).run();
		return null;
	}
	let refresh = false;
	if (t - (seen || 0) > 6e5) {
		await db.prepare("UPDATE sessions SET last_seen=?, ip=? WHERE token=?").bind(nowStamp(), ip, th).run();
		refresh = true;
	}
	const u = {
		...row,
		_session: th,
		_refreshSid: refresh
	};
	delete u.s_created;
	delete u.s_seen;
	return u;
}
async function endSession(db, tok) {
	if (!tok) return;
	await db.prepare("DELETE FROM sessions WHERE token=?").bind(tokenHash(tok)).run();
}
async function endOtherSessions(db, uid, keep = "") {
	await db.prepare("DELETE FROM sessions WHERE user_id=? AND token<>?").bind(uid, keep || "").run();
}
async function loadAuth(request, env) {
	await ensureAuthSchema(env.DB);
	await ensureExtraSchema(env.DB);
	const ip = clientIp$2(request);
	const https = isHttps(request, env);
	const tok = parseCookies(request).hi_sid;
	const user = tok ? await sessionUser(env.DB, tok, ip) : null;
	const auth = buildAuth(user, env, ip, https);
	if (tok && user && user._refreshSid) auth.setCookies = [sidCookie(tok, https)];
	return auth;
}
function safeNext(nxt) {
	const n = nxt || "/";
	if (!n.startsWith("/") || n.startsWith("//") || n.startsWith("/\\")) return "/";
	return n;
}
async function getUserById(db, id) {
	const row = await db.prepare("SELECT * FROM users WHERE id=?").bind(id).first();
	return row ? row : null;
}
async function setting$1(db, key) {
	try {
		return (await db.prepare("SELECT value FROM settings WHERE key=?").bind(key).first())?.value || "";
	} catch {
		return "";
	}
}
async function setSetting(db, key, value) {
	await db.prepare("INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").bind(key, value).run();
}
async function signupMode(db) {
	const m = await setting$1(db, "signup_mode");
	if (m === "open" || m === "code" || m === "closed") return m;
	return await setting$1(db, "signup_code") ? "code" : "open";
}
async function createUser(db, username, pw, role = "user") {
	const { hashPw } = await import("./assets/crypto-FYYfVqc8.js").then((n) => n.t);
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	username = username.trim();
	if (!USERNAME_RE.test(username)) return { error: "Username: 2-32 letters, numbers, dot, dash or underscore." };
	if (pw && pw.length < 8) return { error: "Password: at least 8 characters." };
	if (await db.prepare("SELECT 1 FROM users WHERE username=?").bind(username).first()) return { error: "That username is taken." };
	const res = await db.prepare("INSERT INTO users(username,name,pw,role,created) VALUES(?,?,?,?,?)").bind(username, username.slice(0, 60), pw ? hashPw(pw) : "", role, nowStamp()).run();
	return { id: Number(res.meta.last_row_id) };
}
var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
function normEmail(email) {
	return email.trim().toLowerCase();
}
function emailOf(u) {
	const e = prefsOf(u || null).email;
	return typeof e === "string" ? normEmail(e) : "";
}
async function getUserByEmail(db, email) {
	const want = normEmail(email);
	if (!want || !EMAIL_RE.test(want)) return null;
	const { results } = await db.prepare("SELECT * FROM users WHERE disabled=0").all();
	for (const row of results || []) if (emailOf(row) === want) return row;
	return null;
}
async function setUserEmail(db, id, email, verified = false) {
	const u = await getUserById(db, id);
	if (!u) return;
	const pr = prefsOf(u);
	pr.email = normEmail(email);
	pr.email_verified = verified;
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), id).run();
}
async function uniqueUsername(db, base) {
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	let stem = base.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 28);
	if (stem.length < 2) stem = "user";
	if (!USERNAME_RE.test(stem)) stem = ("u-" + stem).slice(0, 32);
	let name = stem;
	let n = 0;
	while (await db.prepare("SELECT 1 FROM users WHERE username=?").bind(name).first()) {
		n += 1;
		name = `${stem.slice(0, Math.max(1, 32 - String(n).length - 1))}-${n}`;
	}
	return name;
}
function jsonUser(auth, env) {
	const u = auth.user;
	const pr = prefsOf(u);
	return {
		user: u ? {
			id: u.id,
			username: u.username,
			name: u.name,
			role: u.role,
			created: u.created,
			profile: safeJson(u.profile),
			prefs: {
				email: typeof pr.email === "string" ? pr.email : "",
				email_verified: !!pr.email_verified,
				profile_vis: pr.profile_vis || "members",
				walker: pr.walker || null,
				perms: Array.from(auth.perms)
			},
			totp: Boolean(u.totp)
		} : null,
		is_admin: auth.is_admin,
		logged: auth.logged,
		role: auth.role,
		perms: Array.from(auth.perms),
		see_private: auth.see_private,
		needs_2fa: auth.needs_2fa,
		can: Object.fromEntries([
			"create",
			"review",
			"claims",
			"meet",
			"private",
			"home"
		].map((k) => [k, can(auth, k)])),
		signup_mode: void 0,
		turnstile_sitekey: env.EP_TURNSTILE_SITEKEY && env.EP_TURNSTILE_SECRET ? env.EP_TURNSTILE_SITEKEY : ""
	};
}
function safeJson(s) {
	try {
		return JSON.parse(s || "{}");
	} catch {
		return {};
	}
}
// backend/worker/src/perms.ts
function adminBarLinks(auth, counts) {
	if (auth.needs_2fa || !auth.logged) return [];
	const links = [];
	if (can(auth, "review") || can(auth, "claims")) {
		const n = counts?.review;
		links.push({
			href: "/review",
			label: `Review (${n ?? 0})`
		});
	}
	if (can(auth, "create")) links.push({
		href: "/new",
		label: "+ New record"
	});
	if (can(auth, "review")) {
		const n = counts?.reports;
		links.push({
			href: "/admin/reports",
			label: n ? `Reports (${n})` : "Reports"
		});
	}
	if (can(auth, "home")) links.push({
		href: "/admin/home",
		label: "Home highlights"
	});
	if (can(auth, "meet")) {
		const n = counts?.meet;
		links.push({
			href: "/admin/meet",
			label: n ? `Requests (${n})` : "Requests"
		});
		links.push({
			href: "/community/orgs",
			label: "Community orgs"
		});
	}
	if (auth.is_admin) links.push({
		href: "/community/people",
		label: "People"
	}, {
		href: "/users",
		label: "Users"
	}, {
		href: "/admin/email",
		label: "Email"
	}, {
		href: "/admin/stickers",
		label: "Stickers"
	}, {
		href: "/admin/focus",
		label: "Focus areas"
	}, {
		href: "/admin/requests",
		label: "Quote requests"
	}, {
		href: "/export.json",
		label: "Export JSON"
	});
	return links;
}
async function barCounts(db, auth) {
	const out = {};
	try {
		if (can(auth, "review") || can(auth, "claims")) {
			const q = "SELECT COUNT(*) AS n FROM submissions WHERE status='pending'" + (can(auth, "review") ? "" : " AND kind='claim'");
			const a = await db.prepare(q).first();
			let n = Number(a?.n || 0);
			if (can(auth, "review")) {
				const c = await db.prepare("SELECT COUNT(*) AS n FROM comments WHERE status='pending'").first();
				n += Number(c?.n || 0);
			}
			out.review = n;
		}
		if (can(auth, "review")) {
			const r = await db.prepare("SELECT COUNT(*) AS n FROM reports WHERE status='open'").first();
			out.reports = Number(r?.n || 0);
		}
		if (can(auth, "meet")) {
			const m = await db.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE status='pending'").first();
			out.meet = Number(m?.n || 0);
		}
	} catch {}
	return out;
}
/** Status for a gated page: null means allowed. */
function gateStatus(path, method, auth) {
	const p = path.replace(/\/+$/, "") || "/";
	if ((p === "/account" || p.startsWith("/account/") || p === "/watchlist" || p.startsWith("/watchlist/") || p.startsWith("/create") || p.startsWith("/claim/") || p.startsWith("/manage/")) && !auth.user) return {
		status: 302,
		location: "/login?next=" + encodeURIComponent(p)
	};
	if (ADMIN_ONLY.includes(p) || p === "/export.json") {
		if (!auth.is_admin) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/meet" || p === "/community/orgs") {
		if (!can(auth, "meet")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/home") {
		if (!can(auth, "home")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/admin/reports") {
		if (!can(auth, "review")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/review" || p.startsWith("/review/")) {
		if (!auth.logged) {
			if (!auth.user) return {
				status: 302,
				location: "/login?next=" + encodeURIComponent(p)
			};
			return {
				status: 403,
				body: "Admins only"
			};
		}
		if (!(can(auth, "review") || can(auth, "claims"))) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p === "/new" || p.startsWith("/new/")) {
		if (!can(auth, "create")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p.startsWith("/edit/") || p === "/save" || p.startsWith("/delete/")) {
		if (!auth.logged) {
			if (!auth.user) return {
				status: 302,
				location: "/login?next=" + encodeURIComponent(p)
			};
			return {
				status: 403,
				body: "Admins only"
			};
		}
		if (p.startsWith("/delete/") && !can(auth, "create")) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	if (p.startsWith("/admin/")) {
		if (!auth.is_admin) return {
			status: 404,
			body: "Not found"
		};
		return null;
	}
	return null;
}
function isGatedPath(path) {
	const p = path.replace(/\/+$/, "") || "/";
	return p === "/account" || p.startsWith("/account/") || p === "/users" || p === "/review" || p.startsWith("/review/") || p === "/new" || p.startsWith("/new/") || p.startsWith("/edit/") || p === "/save" || p.startsWith("/delete/") || p.startsWith("/admin/") || p === "/community/people" || p === "/community/orgs" || p === "/export.json" || p === "/watchlist" || p.startsWith("/watchlist/") || p.startsWith("/create") || p.startsWith("/claim/") || p.startsWith("/manage/") || p === "/login" || p.startsWith("/login/") || p === "/join" || p === "/logout" || p === "/forgot" || p.startsWith("/reset") || p.startsWith("/verify");
}
// backend/worker/src/rate.ts
/** Sliding-window limiter, same windows as Python ep.security.Limiting. In-memory per isolate. */
var Limiter = class {
	limit;
	window;
	ev = /* @__PURE__ */ new Map();
	constructor(limit, window) {
		this.limit = limit;
		this.window = window;
	}
	clean(key, t) {
		const q = (this.ev.get(key) || []).filter((x) => t - x < this.window);
		if (q.length) this.ev.set(key, q);
		else this.ev.delete(key);
		return q;
	}
	hit(key) {
		const t = Date.now() / 1e3;
		const q = this.clean(key, t);
		q.push(t);
		this.ev.set(key, q);
		if (this.ev.size > 5e4) {
			const keys = [...this.ev.keys()].slice(0, 1e4);
			for (const k of keys) this.ev.delete(k);
		}
	}
	blocked(key) {
		return this.clean(key, Date.now() / 1e3).length >= this.limit;
	}
	waitMinutes(key) {
		const q = this.clean(key, Date.now() / 1e3);
		if (!q.length) return 0;
		return Math.max(1, Math.floor((this.window - (Date.now() / 1e3 - q[0])) / 60) + 1);
	}
	reset(key) {
		this.ev.delete(key);
	}
};
new Limiter(5, 900);
var LOGIN_IP = new Limiter(20, 900);
var CODE_TRIES = new Limiter(6, 900);
var JOIN_IP = new Limiter(5, 3600);
var MAIL_IP = new Limiter(5, 3600);
// backend/worker/src/turnstile.ts
function turnstileOn(env) {
	return Boolean(env.EP_TURNSTILE_SITEKEY && env.EP_TURNSTILE_SECRET);
}
async function turnstileOk(env, token, ip) {
	if (!turnstileOn(env)) return true;
	if (!token) return false;
	const url = env.EP_TURNSTILE_VERIFY_URL || "https://challenges.cloudflare.com/turnstile/v0/siteverify";
	try {
		const body = new URLSearchParams({
			secret: env.EP_TURNSTILE_SECRET || "",
			response: token,
			remoteip: ip
		});
		const data = await (await fetch(url, {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		})).json();
		return Boolean(data.success);
	} catch {
		return false;
	}
}
// backend/worker/src/mail.ts
/** Pluggable email sending. Locally (default) messages are logged, never sent. Secrets stay in Worker secrets / .dev.vars. */
async function ensureMailSchema(db) {
	await db.prepare(`CREATE TABLE IF NOT EXISTS email_log(
      id INTEGER PRIMARY KEY, to_addr TEXT NOT NULL, subject TEXT, text_body TEXT, html_body TEXT,
      provider TEXT, status TEXT, error TEXT, created TEXT)`).run();
}
function mailFromEnv(env) {
	return Boolean(env.EMAIL || env.EP_SMTP_HOST || env.EP_MAIL_API_URL);
}
async function mailConfigured(db, env) {
	if (mailFromEnv(env)) return true;
	if (env.EP_MAIL_PROVIDER === "http" && env.EP_MAIL_API_URL) return true;
	const host = await setting$1(db, "smtp_host");
	return Boolean(host);
}
/** True when the site should behave as if mail works (claims, verify). Local log provider counts. */
async function mailOn(db, env) {
	if (providerOf(env, db) === "log") return true;
	return mailConfigured(db, env);
}
function providerOf(env, _db) {
	if (env.EP_ENV !== "production" && !envFlag(env, "EP_MAIL_SEND", false)) return "log";
	if (env.EMAIL) return "cf";
	if (env.EP_MAIL_PROVIDER === "http" || env.EP_MAIL_API_URL) return "http";
	if (env.EP_MAIL_PROVIDER === "smtp" || env.EP_SMTP_HOST) return "smtp";
	return "log";
}
// epMail: every email uses the website's Hommik theme (teal-cool): same colours, fonts, square boxes and mono labels.
const EP_DIGEST_FROM = "newsletter@embodiment.place";
const EP_MAIL = { bg: "#f3f5f6", paper: "#fafcfc", ink: "#121516", muted: "#5c6168", faint: "#9aa2a6", hair: "#d7dcde", bar: "#e6eaec", accent: "#007a72", sans: "'Helvetica Neue', Helvetica, Arial, sans-serif", mono: "'JetBrains Mono', 'IBM Plex Mono', 'SF Mono', Menlo, Consolas, monospace" };
function epMailSite(env) {
	return (env.EP_SITE_URL || "https://embodiment.place").replace(/\/$/, "");
}
function epMailWrap(inner, env, opts = {}) {
	const m = EP_MAIL, site = epMailSite(env);
	const foot = opts.foot || `You get this email because of your account on <a href="${site}" style="color:${m.muted}">${SITE_NAME}</a>.`;
	return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><style>a{color:${m.accent}}.ep-in p{margin:0 0 14px}.ep-in strong{font-family:${m.mono};font-size:1.25em;letter-spacing:.08em}</style></head><body data-ep-mail style="margin:0;padding:0;background:${m.bg}">` + (opts.preview ? `<div style="display:none;max-height:0;overflow:hidden">${esc(opts.preview)}</div>` : "") + `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${m.bg}"><tr><td align="center" style="padding:24px 12px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${m.paper};border:2px solid ${m.ink};border-collapse:collapse"><tr><td style="padding:16px 20px;border-bottom:2px solid ${m.ink};font-family:${m.sans};font-size:22px;font-weight:700;letter-spacing:-.02em;color:${m.ink}"><a href="${site}" style="color:${m.ink};text-decoration:none">*embodiment.place</a></td></tr>` + (opts.band ? `<tr><td style="background:${m.ink};padding:8px 20px;font-family:${m.mono};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${m.paper}"><span style="display:inline-block;background:${m.accent};color:#fff;padding:2px 8px;margin-right:8px">${esc(opts.band)}</span>${esc(opts.bandNote || "")}</td></tr>` : "") + `<tr><td class="ep-in" style="padding:22px 20px;font-family:${m.sans};font-size:16px;line-height:1.5;color:${m.ink}">${inner}</td></tr><tr><td style="padding:14px 20px;border-top:1px solid ${m.hair};font-family:${m.mono};font-size:11px;line-height:1.6;color:${m.muted}">${foot}</td></tr></table></td></tr></table></body></html>`;
}
async function sendMail(db, env, msg) {
	if (msg.html && !msg.html.includes("data-ep-mail")) msg = { ...msg, html: epMailWrap(msg.html, env) };
	await ensureMailSchema(db);
	const provider = providerOf(env, db);
	let status = "logged";
	let error = "";
	if (provider === "cf" && env.EMAIL) try {
		const from = env.EP_MAIL_FROM || env.EP_SMTP_FROM || "no-reply@embodiment.place";
		const send = (f) => env.EMAIL.send({
			from: f,
			to: msg.to,
			subject: msg.subject,
			html: msg.html,
			text: msg.text || ""
		});
		// msg.from (e.g. newsletter@ for the Watchlist digest) falls back to the default sender if Cloudflare refuses it.
		if (msg.from && msg.from !== from) try {
			await send(msg.from);
		} catch (ex) {
			console.log("[mail] sender " + msg.from + " refused, using " + from + ": " + (ex instanceof Error ? ex.message : String(ex)));
			await send(from);
		}
		else await send(from);
		status = "sent";
	} catch (ex) {
		error = ex instanceof Error ? ex.message : String(ex);
		status = "error";
	}
	else if (provider === "http" && env.EP_MAIL_API_URL) try {
		const r = await fetch(env.EP_MAIL_API_URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				...env.EP_MAIL_API_KEY ? { authorization: `Bearer ${env.EP_MAIL_API_KEY}` } : {}
			},
			body: JSON.stringify({
				to: msg.to,
				subject: msg.subject,
				html: msg.html,
				text: msg.text || "",
				from: msg.from || env.EP_SMTP_FROM || env.EP_MAIL_FROM || ""
			})
		});
		if (!r.ok) {
			error = `Mail API ${r.status}`;
			status = "error";
		} else status = "sent";
	} catch (ex) {
		error = ex instanceof Error ? ex.message : String(ex);
		status = "error";
	}
	else if (provider === "smtp") {
		error = "SMTP from the Worker is not implemented; set EP_MAIL_API_URL or use the log provider.";
		status = "error";
	} else console.log(`[mail:log] to=${msg.to} subject=${msg.subject}\n${msg.text || msg.html}`);
	await db.prepare("INSERT INTO email_log(to_addr, subject, text_body, html_body, provider, status, error, created) VALUES(?,?,?,?,?,?,?,?)").bind(msg.to, msg.subject, msg.text || "", msg.html || "", provider, status, error, nowStamp()).run();
	return error || null;
}
async function smtpSettings(db, env) {
	const keys = [
		"host",
		"port",
		"security",
		"user",
		"password",
		"from",
		"from_name"
	];
	const out = {};
	if (env.EP_SMTP_HOST) for (const k of keys) out[k] = String(env[`EP_SMTP_${k.toUpperCase()}`] || "");
	else for (const k of keys) out[k] = await setting$1(db, "smtp_" + k);
	return {
		...out,
		from_env: mailFromEnv(env),
		provider: providerOf(env, db)
	};
}
var SENT_OK = "If that email can be used to sign in, a code is on its way. It expires in 15 minutes.";
function cookieFlags$1(https, maxAge) {
	return `HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function b64url$1(s) {
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function unb64url$1(s) {
	const pad = "=".repeat((4 - s.length % 4) % 4);
	return atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
}
function pendingAuthCookie(p, secret, https) {
	const exp = Math.floor(Date.now() / 1e3) + 900;
	const val = b64url$1(JSON.stringify({
		...p,
		exp
	}));
	return `hi_auth=${val}.${sign(val, secret)}; ${cookieFlags$1(https, 900)}`;
}
function clearPendingAuth(https) {
	return `hi_auth=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function readPendingAuth(env, request) {
	const raw = parseCookies(request).hi_auth || "";
	const i = raw.lastIndexOf(".");
	if (i < 0) return null;
	const val = raw.slice(0, i);
	const sig = raw.slice(i + 1);
	if (!timingEqual(sign(val, env.EP_SECRET || ""), sig)) return null;
	try {
		const p = JSON.parse(unb64url$1(val));
		if (!p || Number(p.exp) < Date.now() / 1e3) return null;
		if (p.kind !== "login" && p.kind !== "join") return null;
		return {
			kind: p.kind,
			email: p.email,
			username: p.username || "",
			next: p.next || "/"
		};
	} catch {
		return null;
	}
}
function sixDigit() {
	const buf = /* @__PURE__ */ new Uint32Array(1);
	crypto.getRandomValues(buf);
	return String(buf[0] % 1e6).padStart(6, "0");
}
function codeToken(email, code) {
	return tokenHash(`${email}:${code}`);
}
async function issueEmailCode(env, request, pending, https) {
	const ip = clientIp$2(request);
	if (MAIL_IP.blocked(ip) || MAIL_IP.blocked("mail:" + pending.email)) return {
		error: "Too many emails from this address. Try again later.",
		status: 429
	};
	const code = sixDigit();
	const token = codeToken(pending.email, code);
	const created = nowStamp();
	const expires = new Date(Date.now() + 9e5).toISOString().slice(0, 19).replace("T", " ");
	await env.DB.prepare("UPDATE email_tokens SET used=1 WHERE email=? AND kind=? AND used=0").bind(pending.email, pending.kind).run();
	await env.DB.prepare("INSERT INTO email_tokens(token, user_id, kind, email, expires, used, created) VALUES(?,0,?,?,?,0,?)").bind(token, pending.kind, pending.email, expires, created).run();
	MAIL_IP.hit(ip);
	MAIL_IP.hit("mail:" + pending.email);
	const text = `Your sign-in code is ${code}. It expires in 15 minutes.\n\nIf you didn't ask for this, you can ignore this email.\n`;
	await sendMail(env.DB, env, {
		to: pending.email,
		subject: "Your embodiment.place sign-in code",
		html: `<p>Your sign-in code is <strong>${code}</strong>. It expires in 15 minutes.</p><p>If you didn't ask for this, you can ignore this email.</p>`,
		text
	});
	return {
		ok: true,
		cookies: [pendingAuthCookie(pending, env.EP_SECRET || "", https)]
	};
}
async function consumeEmailCode(env, request, code) {
	const ip = clientIp$2(request);
	const pending = readPendingAuth(env, request);
	if (!pending) return {
		error: "That code has expired. Ask for a new one.",
		status: 400
	};
	const digits = (code || "").replace(/\s+/g, "");
	if (!/^\d{6}$/.test(digits)) return {
		error: "Enter the 6-digit code from your email.",
		status: 400
	};
	if (CODE_TRIES.blocked(ip + ":" + pending.email) || LOGIN_IP.blocked(ip)) return {
		error: "Too many tries. Ask for a new code.",
		status: 429
	};
	CODE_TRIES.hit(ip + ":" + pending.email);
	LOGIN_IP.hit(ip);
	const token = codeToken(pending.email, digits);
	const row = await env.DB.prepare("SELECT token, expires, used FROM email_tokens WHERE token=? AND kind=? AND email=?").bind(token, pending.kind, pending.email).first();
	const now = nowStamp();
	if (!row || row.used || row.expires < now) return {
		error: "That code is not valid or has expired.",
		status: 400
	};
	await env.DB.prepare("UPDATE email_tokens SET used=1 WHERE token=?").bind(token).run();
	return { pending };
}
// backend/worker/src/oauth.ts
function oauthEnabled(env) {
	return {
		google: Boolean(env.EP_GOOGLE_CLIENT_ID && env.EP_GOOGLE_CLIENT_SECRET),
		apple: Boolean(env.EP_APPLE_CLIENT_ID && env.EP_APPLE_TEAM_ID && env.EP_APPLE_KEY_ID && env.EP_APPLE_PRIVATE_KEY),
		x: Boolean(env.EP_X_CLIENT_ID && env.EP_X_CLIENT_SECRET)
	};
}
function siteOrigin(env, request) {
	const configured = (env.EP_SITE_URL || "").replace(/\/$/, "");
	if (configured) return configured;
	return new URL(request.url).origin;
}
function oauthCallbackUrl(env, request, provider) {
	return `${siteOrigin(env, request)}/api/auth/oauth/${provider}/callback`;
}
function b64url(s) {
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function unb64url(s) {
	const pad = "=".repeat((4 - s.length % 4) % 4);
	return atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad);
}
function cookieFlags(https, maxAge) {
	return `HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${https ? "; Secure" : ""}`;
}
function stateCookie(st, secret, https) {
	const val = b64url(JSON.stringify(st));
	return `hi_oauth=${val}.${sign(val, secret)}; ${cookieFlags(https, 600)}`;
}
function clearStateCookie(https) {
	return `hi_oauth=; Path=/; Max-Age=0${https ? "; Secure" : ""}`;
}
function readState(env, request) {
	const raw = parseCookies(request).hi_oauth || "";
	const i = raw.lastIndexOf(".");
	if (i < 0) return null;
	const val = raw.slice(0, i);
	const sig = raw.slice(i + 1);
	if (!timingEqual(sign(val, env.EP_SECRET || ""), sig)) return null;
	try {
		const st = JSON.parse(unb64url(val));
		if (!st || Number(st.exp) < Date.now() / 1e3) return null;
		return st;
	} catch {
		return null;
	}
}
async function pkce() {
	const verifier = token() + token();
	const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
	return {
		verifier,
		challenge: btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
	};
}
async function startOAuth(c, provider) {
	const env = c.env;
	if (!oauthEnabled(env)[provider]) return c.json({ error: "That sign-in method is not configured." }, 404);
	const nxt = safeNext(c.req.query("next"));
	const https = c.get("auth").https;
	const exp = Math.floor(Date.now() / 1e3) + 600;
	const nonce = token();
	const { verifier, challenge } = await pkce();
	const st = {
		p: provider,
		next: nxt,
		v: verifier,
		n: nonce,
		exp
	};
	const redirect = oauthCallbackUrl(env, c.req.raw, provider);
	let loc = "";
	if (provider === "google") {
		const u = new URL("https://accounts.google.com/o/oauth2/v2/auth");
		u.searchParams.set("client_id", env.EP_GOOGLE_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("scope", "openid email profile");
		u.searchParams.set("state", nonce);
		u.searchParams.set("code_challenge", challenge);
		u.searchParams.set("code_challenge_method", "S256");
		u.searchParams.set("nonce", nonce);
		loc = u.toString();
	} else if (provider === "apple") {
		const u = new URL("https://appleid.apple.com/auth/authorize");
		u.searchParams.set("client_id", env.EP_APPLE_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("response_mode", "form_post");
		u.searchParams.set("scope", "name email");
		u.searchParams.set("state", nonce);
		loc = u.toString();
	} else {
		const u = new URL("https://x.com/i/oauth2/authorize");
		u.searchParams.set("client_id", env.EP_X_CLIENT_ID || "");
		u.searchParams.set("redirect_uri", redirect);
		u.searchParams.set("response_type", "code");
		u.searchParams.set("scope", "tweet.read users.read offline.access users.email");
		u.searchParams.set("state", nonce);
		u.searchParams.set("code_challenge", challenge);
		u.searchParams.set("code_challenge_method", "S256");
		loc = u.toString();
	}
	const res = c.redirect(loc, 302);
	res.headers.append("Set-Cookie", stateCookie(st, env.EP_SECRET || "", https));
	return res;
}
function b64urlBytes(buf) {
	let s = "";
	for (const b of buf) s += String.fromCharCode(b);
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function pemToPkcs8(pem) {
	const b64 = pem.replace(/-----BEGIN [^-]+-----/, "").replace(/-----END [^-]+-----/, "").replace(/\s+/g, "");
	const bin = atob(b64);
	const out = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
	return out.buffer;
}
async function appleClientSecret(env) {
	let pem = (env.EP_APPLE_PRIVATE_KEY || "").replace(/\\n/g, "\n").trim();
	if (!pem.includes("BEGIN")) pem = `-----BEGIN PRIVATE KEY-----\n${pem}\n-----END PRIVATE KEY-----`;
	const key = await crypto.subtle.importKey("pkcs8", pemToPkcs8(pem), {
		name: "ECDSA",
		namedCurve: "P-256"
	}, false, ["sign"]);
	const now = Math.floor(Date.now() / 1e3);
	const head = b64url(JSON.stringify({
		alg: "ES256",
		kid: env.EP_APPLE_KEY_ID
	}));
	const body = b64url(JSON.stringify({
		iss: env.EP_APPLE_TEAM_ID || "",
		sub: env.EP_APPLE_CLIENT_ID || "",
		aud: "https://appleid.apple.com",
		iat: now,
		exp: now + 300
	}));
	const sig = await crypto.subtle.sign({
		name: "ECDSA",
		hash: "SHA-256"
	}, key, new TextEncoder().encode(`${head}.${body}`));
	return `${head}.${body}.${b64urlBytes(new Uint8Array(sig))}`;
}
async function exchange(env, request, provider, code, st) {
	const redirect = oauthCallbackUrl(env, request, provider);
	if (provider === "google") {
		const body = new URLSearchParams({
			code,
			client_id: env.EP_GOOGLE_CLIENT_ID || "",
			client_secret: env.EP_GOOGLE_CLIENT_SECRET || "",
			redirect_uri: redirect,
			grant_type: "authorization_code",
			code_verifier: st.v || ""
		});
		const tok = await fetch("https://oauth2.googleapis.com/token", {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		});
		if (!tok.ok) throw new Error("Google token exchange failed");
		const tj = await tok.json();
		const info = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { authorization: `Bearer ${tj.access_token || ""}` } });
		if (!info.ok) throw new Error("Google profile failed");
		const u = await info.json();
		if (!u.sub) throw new Error("Google profile missing id");
		const email = u.email_verified && u.email ? normEmail(u.email) : "";
		return {
			provider,
			id: u.sub,
			email,
			name: (u.name || "").slice(0, 60),
			username: (u.email || "user").split("@")[0]
		};
	}
	if (provider === "apple") {
		const secret = await appleClientSecret(env);
		const body = new URLSearchParams({
			code,
			client_id: env.EP_APPLE_CLIENT_ID || "",
			client_secret: secret,
			redirect_uri: redirect,
			grant_type: "authorization_code"
		});
		const tok = await fetch("https://appleid.apple.com/auth/token", {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body
		});
		if (!tok.ok) throw new Error("Apple token exchange failed");
		const payload = decodeJwt((await tok.json()).id_token || "");
		const id = String(payload.sub || "");
		if (!id) throw new Error("Apple profile missing id");
		const email = typeof payload.email === "string" ? normEmail(payload.email) : "";
		return {
			provider,
			id,
			email,
			name: "",
			username: email ? email.split("@")[0] : "user"
		};
	}
	const basic = btoa(`${env.EP_X_CLIENT_ID}:${env.EP_X_CLIENT_SECRET}`);
	const body = new URLSearchParams({
		code,
		redirect_uri: redirect,
		grant_type: "authorization_code",
		code_verifier: st.v || ""
	});
	const tok = await fetch("https://api.x.com/2/oauth2/token", {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			authorization: `Basic ${basic}`
		},
		body
	});
	if (!tok.ok) throw new Error("X token exchange failed");
	const tj = await tok.json();
	const info = await fetch("https://api.x.com/2/users/me?user.fields=confirmed_email,name,username", { headers: { authorization: `Bearer ${tj.access_token || ""}` } });
	if (!info.ok) throw new Error("X profile failed");
	const u = await info.json();
	const id = u.data?.id || "";
	if (!id) throw new Error("X profile missing id");
	return {
		provider,
		id,
		email: u.data?.confirmed_email ? normEmail(u.data.confirmed_email) : "",
		name: (u.data?.name || "").slice(0, 60),
		username: u.data?.username || "user"
	};
}
function decodeJwt(tok) {
	const parts = tok.split(".");
	if (parts.length < 2) return {};
	try {
		return JSON.parse(unb64url(parts[1]));
	} catch {
		return {};
	}
}
async function findByProvider(db, provider, id) {
	const { results } = await db.prepare("SELECT * FROM users WHERE disabled=0").all();
	for (const row of results || []) {
		const oauth = prefsOf(row).oauth;
		if (oauth && String(oauth[provider] || "") === id) return row;
	}
	return null;
}
async function attachProvider(db, user, ident) {
	const pr = prefsOf(user);
	const oauth = pr.oauth && typeof pr.oauth === "object" ? pr.oauth : {};
	oauth[ident.provider] = ident.id;
	pr.oauth = oauth;
	if (ident.email && !emailOf(user)) {
		pr.email = ident.email;
		pr.email_verified = true;
	} else if (ident.email && emailOf(user) === ident.email) pr.email_verified = true;
	if (ident.name && !user.name) {
		await db.prepare("UPDATE users SET name=?, prefs=? WHERE id=?").bind(ident.name.slice(0, 60), JSON.stringify(pr), user.id).run();
		return;
	}
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), user.id).run();
}
async function upsertOAuthUser(db, ident) {
	const byProvider = await findByProvider(db, ident.provider, ident.id);
	if (byProvider) {
		await attachProvider(db, byProvider, ident);
		return { user: await getUserById(db, byProvider.id) || byProvider };
	}
	if (ident.email && EMAIL_RE.test(ident.email)) {
		const byEmail = await getUserByEmail(db, ident.email);
		if (byEmail) {
			await attachProvider(db, byEmail, ident);
			return { user: await getUserById(db, byEmail.id) || byEmail };
		}
	}
	const uname = await uniqueUsername(db, ident.username || (ident.email ? ident.email.split("@")[0] : "user"));
	const made = await createUser(db, uname, "", "user");
	if (made.error || !made.id) return { error: made.error || "Could not create the account." };
	if (ident.name) await db.prepare("UPDATE users SET name=? WHERE id=?").bind(ident.name.slice(0, 60) || uname, made.id).run();
	const user = await getUserById(db, made.id);
	if (!user) return { error: "Could not create the account." };
	await attachProvider(db, user, ident);
	return { user: await getUserById(db, made.id) || user };
}
function failRedirect(c, error, https) {
	const u = new URL("/login", c.req.url);
	u.searchParams.set("error", error);
	const res = c.redirect(u.pathname + u.search);
	res.headers.append("Set-Cookie", clearStateCookie(https));
	return res;
}
async function oauthCallback(c, provider) {
	const env = c.env;
	const https = c.get("auth").https;
	if (!oauthEnabled(env)[provider]) return failRedirect(c, "That sign-in method is not configured.", https);
	const g = c.req.method === "POST" ? await readForm(c) : Object.fromEntries(new URL(c.req.url).searchParams);
	if (g.error) return failRedirect(c, "Sign-in was cancelled.", https);
	const st = readState(env, c.req.raw);
	if (!st || st.p !== provider) return failRedirect(c, "That sign-in step expired. Try again.", https);
	if (g.state && st.n && g.state !== st.n) return failRedirect(c, "That sign-in step expired. Try again.", https);
	const code = g.code || "";
	if (!code) return failRedirect(c, "Sign-in did not complete. Try again.", https);
	let ident;
	try {
		ident = await exchange(env, c.req.raw, provider, code, st);
	} catch {
		return failRedirect(c, "Could not finish sign-in with that service. Try again.", https);
	}
	const made = await upsertOAuthUser(env.DB, ident);
	if ("error" in made) return failRedirect(c, made.error, https);
	if (!made.user || made.user.disabled) return failRedirect(c, "This account is not available.", https);
	const { isSuspended, suspensionText } = await Promise.resolve().then(() => session_exports);
	if (isSuspended(made.user)) return failRedirect(c, suspensionText(made.user), https);
	const tok = await newSession(env.DB, made.user.id, c.get("auth").ip, c.req.header("User-Agent") || "");
	let nxt = safeNext(st.next);
	let prof = {};
	try {
		prof = JSON.parse(made.user.profile || "{}");
	} catch {}
	if (made.user.role !== "admin" && !Object.keys(prof).length && (nxt === "/" || !st.next)) nxt = "/account?welcome=1";
	const res = c.redirect(nxt);
	res.headers.append("Set-Cookie", sidCookie(tok, https));
	res.headers.append("Set-Cookie", clearStateCookie(https));
	return res;
}
async function readForm(c) {
	try {
		const fd = await c.req.parseBody();
		const out = {};
		for (const [k, v] of Object.entries(fd)) out[k] = typeof v === "string" ? v : "";
		return out;
	} catch {
		return {};
	}
}
// backend/worker/src/auth_routes.ts
function wantsJson(c) {
	const acc = c.req.header("Accept") || "";
	const ct = c.req.header("Content-Type") || "";
	return acc.includes("application/json") || ct.includes("application/json") || c.req.path.startsWith("/api/");
}
async function readBody(c) {
	if ((c.req.header("Content-Type") || "").includes("application/json")) try {
		const j = await c.req.json();
		const out = {};
		for (const [k, v] of Object.entries(j)) out[k] = v == null ? "" : String(v);
		return out;
	} catch {
		return {};
	}
	try {
		const fd = await c.req.parseBody();
		const out = {};
		for (const [k, v] of Object.entries(fd)) out[k] = typeof v === "string" ? v : "";
		if (Array.isArray(fd.perm)) {}
		return out;
	} catch {
		return {};
	}
}
async function formAll(c) {
	if ((c.req.header("Content-Type") || "").includes("application/json")) {
		const j = await c.req.json();
		const out = {};
		for (const [k, v] of Object.entries(j)) out[k] = Array.isArray(v) ? v.map(String) : [String(v ?? "")];
		return out;
	}
	const raw = await c.req.parseBody({ all: true });
	const out = {};
	for (const [k, v] of Object.entries(raw)) if (Array.isArray(v)) out[k] = v.filter((x) => typeof x === "string");
	else if (typeof v === "string") out[k] = [v];
	return out;
}
function fail(c, error, status = 400, extra = {}) {
	if (wantsJson(c)) return c.json({
		error,
		...extra
	}, status);
	const path = c.req.path.startsWith("/join") ? "/join" : c.req.path.startsWith("/login/code") ? "/login/code" : "/login";
	const u = new URL(path, c.req.url);
	u.searchParams.set("error", error);
	const nxt = c.req.query("next");
	if (nxt) u.searchParams.set("next", nxt);
	return c.redirect(u.pathname + u.search);
}
function okRedirect(c, nxt, headers, body) {
	if (wantsJson(c)) {
		const res = c.json({
			ok: true,
			next: nxt,
			...body
		});
		for (const [, v] of Object.entries(headers)) res.headers.append("Set-Cookie", v);
		return res;
	}
	const res = c.redirect(nxt);
	for (const [, v] of Object.entries(headers)) res.headers.append("Set-Cookie", v);
	return res;
}
async function postLogin(c) {
	const env = c.env;
	const g = await readBody(c);
	const ip = c.get("auth").ip;
	const https = c.get("auth").https;
	if (!await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first()) return fail(c, "Create the first admin account from the join page.");
	if (!await turnstileOk(env, g["cf-turnstile-response"] || "", ip)) return fail(c, "Please complete the check and try again.");
	const email = normEmail(g.email || "");
	if (!EMAIL_RE.test(email)) return fail(c, "Enter the email address on your account.");
	const existing = await getUserByEmail(env.DB, email);
	if (existing && isSuspended(existing)) return fail(c, suspensionText(existing), 403);
	if (existing) {
		const issued = await issueEmailCode(env, c.req.raw, {
			kind: "login",
			email,
			username: "",
			next: safeNext(g.next)
		}, https);
		if ("error" in issued) return fail(c, issued.error, issued.status);
		return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
			sent: true,
			message: SENT_OK
		});
	}
	return okRedirect(c, "/login?sent=1", {}, {
		sent: true,
		message: SENT_OK
	});
}
async function postLoginCode(c) {
	const env = c.env;
	const g = await readBody(c);
	const https = c.get("auth").https;
	const used = await consumeEmailCode(env, c.req.raw, g.code || "");
	if ("error" in used) return fail(c, used.error, used.status);
	const { pending } = used;
	const ip = c.get("auth").ip;
	let user = await getUserByEmail(env.DB, pending.email);
	if (pending.kind === "join") {
		if (!user) {
			const mode = await signupMode(env.DB);
			const hasUsers = await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first();
			if (!hasUsers) {} else if (mode === "closed") return fail(c, "Sign-up is closed.");
			const role = hasUsers ? "user" : "admin";
			const made = await createUser(env.DB, pending.username || "", "", role);
			if (made.error || !made.id) return fail(c, made.error || "Could not create the account.");
			await setUserEmail(env.DB, made.id, pending.email, true);
			user = await getUserById(env.DB, made.id);
		} else if (!emailOf(user)) await setUserEmail(env.DB, user.id, pending.email, true);
	}
	if (!user || user.disabled) return fail(c, "That code is not valid or has expired.");
	if (isSuspended(user)) return fail(c, suspensionText(user), 403);
	const tok = await newSession(env.DB, user.id, ip, c.req.header("User-Agent") || "");
	let nxt = safeNext(pending.next || g.next);
	let prof = {};
	try {
		prof = JSON.parse(user.profile || "{}");
	} catch {}
	if (pending.kind === "join") nxt = "/account?welcome=1";
	else if (user.role !== "admin" && !Object.keys(prof).length && (nxt === "/" || !pending.next)) nxt = "/account?welcome=1";
	return okRedirect(c, nxt, {
		"Set-Cookie": sidCookie(tok, https),
		"Set-Cookie-2": clearPendingAuth(https)
	});
}
async function postJoin(c) {
	const env = c.env;
	const g = await readBody(c);
	const hasUsers = await env.DB.prepare("SELECT 1 FROM users LIMIT 1").first();
	const mode = await signupMode(env.DB);
	if (!hasUsers) {} else if (mode === "closed") return fail(c, "Sign-up is closed.");
	else if (mode === "code") {
		const code = await (await Promise.resolve().then(() => session_exports)).setting(env.DB, "signup_code");
		const a = (g.code || "").trim().toLowerCase();
		const b = (code || "").toLowerCase();
		if (!timingEqual(a, b)) return fail(c, "That code is not valid.", 401);
	}
	const ip = c.get("auth").ip;
	const https = c.get("auth").https;
	JOIN_IP.limit = envNumber(env, "EP_JOIN_PER_HOUR", 5);
	if (JOIN_IP.blocked(ip)) return fail(c, "Too many new accounts from here. Try again later.", 429);
	if (!await turnstileOk(env, g["cf-turnstile-response"] || "", ip)) return fail(c, "Please complete the check and try again.");
	const email = normEmail((g.email || "").slice(0, 200));
	if (!EMAIL_RE.test(email)) return fail(c, "Enter a valid email address.");
	if (g.terms !== "1") return fail(c, "Please agree to the terms.");
	const existing = await getUserByEmail(env.DB, email);
	if (existing) {
		if (isSuspended(existing)) return fail(c, suspensionText(existing), 403);
		const issued = await issueEmailCode(env, c.req.raw, {
			kind: "login",
			email,
			username: "",
			next: "/account?welcome=1"
		}, https);
		if ("error" in issued) return fail(c, issued.error, issued.status);
		return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
			sent: true,
			message: SENT_OK
		});
	}
	const { USERNAME_RE } = await import("./assets/catalog-6mDCor_N.js").then((n) => n.G);
	const username = (g.username || "").trim();
	if (!USERNAME_RE.test(username)) return fail(c, "Username: 2-32 letters, numbers, dot, dash or underscore.");
	if (await env.DB.prepare("SELECT 1 FROM users WHERE username=?").bind(username).first()) return fail(c, "That username is taken.");
	JOIN_IP.hit(ip);
	const issued = await issueEmailCode(env, c.req.raw, {
		kind: "join",
		email,
		username,
		next: "/account?welcome=1"
	}, https);
	if ("error" in issued) return fail(c, issued.error, issued.status);
	return okRedirect(c, "/login?sent=1", { "Set-Cookie": issued.cookies[0] }, {
		sent: true,
		message: SENT_OK
	});
}
async function postLogout(c) {
	const { endSession, parseCookies } = await Promise.resolve().then(() => session_exports);
	const tok = parseCookies(c.req.raw).hi_sid;
	await endSession(c.env.DB, tok);
	const https = c.get("auth").https;
	return okRedirect(c, "/", { "Set-Cookie": clearSidCookie(https) });
}
async function authConfig(c) {
	const mode = await signupMode(c.env.DB);
	return c.json({
		signup_mode: mode,
		turnstile: turnstileOn(c.env),
		turnstile_sitekey: turnstileOn(c.env) ? c.env.EP_TURNSTILE_SITEKEY : "",
		has_users: Boolean(await c.env.DB.prepare("SELECT 1 FROM users LIMIT 1").first()),
		oauth: oauthEnabled(c.env),
		passwordless: true
	});
}
// shared/value.ts
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
// shared/format.ts
function recordDate(rec) {
	const df = DATE_FIELDS[rec.type];
	return df ? fieldStr(rec.data, df) : "";
}
function feedDate(rec) {
	return ((rec.feed_at || recordDate(rec) || rec.created || "") + "").slice(0, 10);
}
function relDate(d, today = /* @__PURE__ */ new Date()) {
	const day = parseIsoDate((d || "").slice(0, 10));
	if (!day) return d;
	const n = Math.round((toUtc(today) - toUtc(day)) / 864e5);
	if (n < 0) return d;
	if (n === 0) return "Today";
	if (n < 7) return `${n}d`;
	if (n < 56) return `${Math.floor(n / 7)}w`;
	return d;
}
function parseIsoDate(s) {
	const t = (s || "").slice(0, 10);
	const iso = t.length === 7 ? t + "-01" : t;
	if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
	const d = /* @__PURE__ */ new Date(iso + "T00:00:00Z");
	return Number.isNaN(d.getTime()) ? null : d;
}
function toUtc(d) {
	return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}
function fmtNum(v) {
	const x = Number(v);
	if (!Number.isFinite(x)) return String(v ?? "");
	if (Number.isInteger(x)) return x.toLocaleString("en-US");
	return x.toLocaleString("en-US", { maximumFractionDigits: 2 }).replace(/\.0+$/, "");
}
function readMinutes(text, chars) {
	if (chars != null && chars > (text || "").length) return Math.max(1, Math.round(chars / 1100));
	const words = (text || "").match(/\w+/g) || [];
	return Math.max(1, Math.round(words.length / 220));
}
function hostOf(url) {
	try {
		return new URL(url).hostname.replace(/^www\./, "");
	} catch {
		return "";
	}
}
function videoInfo(url) {
	const u = (url || "").trim();
	const yt = u.match(/^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/);
	if (yt) return {
		kind: "youtube",
		id: yt[1]
	};
	const x = u.match(/^https?:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/\w{1,15}\/status(?:es)?\/(\d{5,25})/);
	if (x) return {
		kind: "x",
		id: x[1]
	};
	return null;
}
function evDates(rec) {
	let a = parseIsoDate(fieldStr(rec.data, "date"));
	let b = parseIsoDate(fieldStr(rec.data, "end_date")) || a;
	if (a && b && b < a) b = a;
	return [a, b];
}
function evState(rec, today = /* @__PURE__ */ new Date()) {
	const [a, b] = evDates(rec);
	if (!a) return fieldStr(rec.data, "status") || "Upcoming";
	const t = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
	if (t < a) return "Upcoming";
	if (b && t <= b) return "Live";
	return "Ended";
}
function whenText(rec, long = false) {
	const [a, b] = evDates(rec);
	if (!a) return "";
	const wd = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	][a.getUTCDay()];
	if (!b || b.getTime() === a.getTime()) return `${long ? wd + " " : ""}${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()}`;
	if (a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth()) return `${a.getUTCDate()}–${b.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()}`;
	if (a.getUTCFullYear() === b.getUTCFullYear()) return `${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]} ${a.getUTCFullYear()}`;
	return `${a.getUTCDate()} ${MONTHS[a.getUTCMonth()]} ${a.getUTCFullYear()} – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]} ${b.getUTCFullYear()}`;
}
function countdown(rec, today = /* @__PURE__ */ new Date()) {
	const st = evState(rec, today);
	const [a] = evDates(rec);
	if (st === "Live") return "Happening now";
	if (st === "Ended" || !a) return st === "Ended" ? "Ended" : "";
	const n = Math.round((a.getTime() - Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) / 864e5);
	if (n === 1) return "Tomorrow";
	if (n < 60) return `In ${n} days`;
	return `In ${Math.round(n / 30.4)} months`;
}
function placeText(rec) {
	return [fieldStr(rec.data, "venue"), fieldStr(rec.data, "city")].filter(Boolean).join(" · ");
}
function evDayPart(rec) {
	const [a, b] = evDates(rec);
	if (!a) return null;
	const day = `${a.getUTCDate()}` + (b && b.getTime() !== a.getTime() && b.getUTCMonth() === a.getUTCMonth() && b.getUTCFullYear() === a.getUTCFullYear() ? `–${b.getUTCDate()}` : "");
	let sub = MONTHS[a.getUTCMonth()];
	if (b && b.getTime() !== a.getTime() && (b.getUTCMonth() !== a.getUTCMonth() || b.getUTCFullYear() !== a.getUTCFullYear())) sub += ` – ${b.getUTCDate()} ${MONTHS[b.getUTCMonth()]}`;
	return {
		m: sub,
		d: day,
		y: String(a.getUTCFullYear())
	};
}
function monthYear(d) {
	if (!d) return "Date to be announced";
	return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
function cardName(name, maker) {
	if (!maker) return name;
	const m = maker.trim();
	const first = m.split(/\s+/)[0];
	for (const pre of [m, first && first.length >= 2 ? first : null]) if (pre && name.toLowerCase().startsWith(pre.toLowerCase() + " ")) {
		const rest = name.slice(pre.length).replace(/^[\s\-·:]+/, "");
		if (rest && !/^\d/.test(rest)) return rest;
	}
	return name;
}
function shortValue(unit, v) {
	if (v == null || v === "") return "–";
	if (unit === "USD") {
		const x = Number(v);
		if (x >= 1e6) return "$" + `${(x / 1e6).toFixed(1)}`.replace(/\.0$/, "") + "M";
		if (x >= 1e3) return `$${Math.round(x / 1e3)}K`;
		return `$${Math.round(x)}`;
	}
	return fmtNum(v);
}
function shortLabel(label) {
	return label.replace(/\s*\(.*?\)/g, "");
}
function orgColor(i, palette) {
	i = Math.floor(i);
	if (i < palette.length) return palette[i];
	const { r, g, b } = hslToRgb(i * 137.508 % 360 / 360, .7, .42 + .1 * (i % 2));
	const hex = (n) => n.toString(16).padStart(2, "0");
	return `#${hex(r)}${hex(g)}${hex(b)}`;
}
function hslToRgb(h, s, l) {
	const C = (1 - Math.abs(2 * l - 1)) * s;
	const hp = h * 6;
	const X = C * (1 - Math.abs(hp % 2 - 1));
	let r = 0, g = 0, b = 0;
	if (hp < 1) [r, g, b] = [
		C,
		X,
		0
	];
	else if (hp < 2) [r, g, b] = [
		X,
		C,
		0
	];
	else if (hp < 3) [r, g, b] = [
		0,
		C,
		X
	];
	else if (hp < 4) [r, g, b] = [
		0,
		X,
		C
	];
	else if (hp < 5) [r, g, b] = [
		X,
		0,
		C
	];
	else [r, g, b] = [
		C,
		0,
		X
	];
	const m = l - C / 2;
	return {
		r: Math.floor((r + m) * 255),
		g: Math.floor((g + m) * 255),
		b: Math.floor((b + m) * 255)
	};
}
function categoryOf(rec, alias, cats) {
	if (rec.type === "paper") return "Research";
	if (EP_WL_CAT[rec.type]) return EP_WL_CAT[rec.type];
	let c = String(fieldVal(rec.data, "kind") || "Blog");
	c = alias[c] || c;
	return cats.includes(c) ? c : "Blog";
}
function parseCredits(text) {
	const lines = String(text || "").split("\n");
	const out = [];
	for (const line of lines) {
		const st = line.trim();
		if (!st) continue;
		const [n, ...rest] = st.split("|");
		out.push([n.trim(), rest.join("|").trim()]);
	}
	return out;
}
// backend/worker/src/records.ts
function slugify$1(s) {
	return s.toLowerCase().replace(/[^\w\s-]/gu, "").trim().replace(/[-\s]+/g, "-").replace(/^-|-$/g, "") || "item";
}
async function uniqueSlug(db, name, excludeId) {
	const base = slugify$1(name);
	let slug = base, i = 2;
	for (;;) {
		const row = await db.prepare("SELECT id FROM records WHERE slug=?").bind(slug).first();
		if (!row || row.id === excludeId) return slug;
		slug = `${base}-${i++}`;
	}
}
function feedAt(tkey, data, created) {
	return (recordDate({
		type: tkey,
		data
	}) || created || "").slice(0, 10);
}
async function saveRecord(db, rid, tkey, name, summary, body, data, notes, priv, watch, rels) {
	const ts = nowStamp();
	const payload = JSON.stringify(data);
	if (rid) {
		const old = await db.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
		if (old) try {
			await db.prepare("INSERT INTO revisions(record_id,snapshot,at) VALUES(?,?,?)").bind(rid, JSON.stringify(old), ts).run();
		} catch {}
		await db.prepare("UPDATE records SET name=?,summary=?,body=?,data=?,notes=?,private=?,watch=?,updated=?,feed_at=? WHERE id=?").bind(name, summary, body, payload, notes, priv, watch, ts, feedAt(tkey, data, ts), rid).run();
	} else {
		const slug = await uniqueSlug(db, name);
		const res = await db.prepare("INSERT INTO records(type,slug,name,summary,body,data,notes,private,watch,demo,created,updated,feed_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)").bind(tkey, slug, name, summary, body, payload, notes, priv, watch, 0, ts, ts, feedAt(tkey, data, ts)).run();
		rid = Number(res.meta.last_row_id);
	}
	if (rels !== null && rid) {
		await db.prepare("DELETE FROM links WHERE src=?").bind(rid).run();
		let pos = 0;
		for (const [rel, dst, note] of rels) if (dst !== rid) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(rid, rel, dst, note, pos++).run();
	}
	await reindex(db, rid);
	return rid;
}
async function reindex(db, rid) {
	try {
		const row = await db.prepare("SELECT id, name, summary, body, type, data FROM records WHERE id=?").bind(rid).first();
		if (!row) return;
		await db.prepare("DELETE FROM fts WHERE rowid=?").bind(rid).run();
		await db.prepare("INSERT INTO fts(rowid, name, type, summary, body, extra) VALUES(?,?,?,?,?,?)").bind(rid, row.name, row.type, row.summary || "", row.body || "", row.data || "").run();
	} catch {}
}
function subLabel(kind, payload = {}) {
	if (kind === "compose") return String(payload.kind || "Post");
	if (kind === "record_edit") return "Edit: " + String(payload.type || "record");
	if (kind === "company_new") return "New organisation";
	if (kind === "item") return "New " + String(payload.type || "item");
	return kind;
}
async function applySubmission(db, sub) {
	const p = JSON.parse(String(sub.payload || "{}"));
	const kind = String(sub.kind);
	const target = sub.target_id != null ? Number(sub.target_id) : null;
	const author = await db.prepare("SELECT * FROM users WHERE id=?").bind(sub.user_id).first();
	if (kind === "profile") {
		await db.prepare("UPDATE users SET profile=? WHERE id=?").bind(JSON.stringify(p.data || {}), sub.user_id).run();
		return null;
	}
	if (kind === "claim" && target) {
		await db.prepare("INSERT OR IGNORE INTO owners(user_id,company_id,created) VALUES(?,?,?)").bind(sub.user_id, target, nowStamp()).run();
		return target;
	}
	if (kind === "company_new") {
		const ot = String(p.org_type || "company");
		const rels = p.parent ? [[
			"parent",
			Number(p.parent),
			""
		]] : [];
		const rid = await saveRecord(db, null, ot, String(p.name), String(p.summary || ""), String(p.body || ""), p.data || {}, "", 0, 0, rels);
		await db.prepare("INSERT OR IGNORE INTO owners(user_id,company_id,created) VALUES(?,?,?)").bind(sub.user_id, rid, nowStamp()).run();
		return rid;
	}
	if (kind === "company_edit" || kind === "record_edit") {
		if (!target) throw new Error("The record no longer exists.");
		const old = await db.prepare("SELECT * FROM records WHERE id=?").bind(target).first();
		if (!old) throw new Error("The record no longer exists.");
		const data = {
			...JSON.parse(String(old.data || "{}")),
			...p.data || {}
		};
		if (kind === "company_edit" && "labs" in p) {
			const labs = Array.isArray(p.labs) ? p.labs : [];
			if (labs.length) data.labs = { v: labs.slice(0, 60) };
			else delete data.labs;
		}
		const rid = await saveRecord(db, target, String(old.type), String(p.name || old.name), String(p.summary ?? old.summary), String(p.body ?? old.body), data, String(old.notes || ""), Number(old.private || 0), Number(old.watch || 0), null);
		if (kind === "company_edit") {
			for (const pair of p.lab_renames || []) {
				const [was, nowName] = pair;
				const rows = await db.prepare("SELECT r.id, r.data FROM links l JOIN records r ON r.id=l.src WHERE l.dst=? AND r.type IN ('post','paper')").bind(target).all();
				for (const row of rows.results || []) {
					const d = JSON.parse(String(row.data || "{}"));
					if ((d.lab?.v || "").toLowerCase() === String(was).toLowerCase()) {
						d.lab = { v: nowName };
						await db.prepare("UPDATE records SET data=? WHERE id=?").bind(JSON.stringify(d), row.id).run();
					}
				}
			}
			if ("leaders" in p) await saveLeaders(db, target, p.leaders || []);
			const conns = p.connections || {};
			for (const rel of CONNECTION_RELS) {
				if (!(rel in conns)) continue;
				await db.prepare("DELETE FROM links WHERE src=? AND rel=?").bind(target, rel).run();
				let pos = 0;
				for (const item of (conns[rel] || []).slice(0, 60)) {
					const oid = Number(item[0]);
					const note = String(item[1] || "");
					if (!oid || oid === target) continue;
					if (await db.prepare("SELECT 1 AS n FROM records WHERE id=?").bind(oid).first()) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, rel, oid, note, pos++).run();
				}
			}
			if ("highlights" in p) {
				await db.prepare("DELETE FROM links WHERE src=? AND rel='highlights'").bind(target).run();
				let pos = 0;
				for (const item of (p.highlights || []).slice(0, 3)) {
					const hid = Number(item[0]);
					const note = String(item[1] || "");
					if (!hid) continue;
					if (await db.prepare("SELECT 1 AS n FROM records WHERE id=?").bind(hid).first()) await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, "highlights", hid, note, 100 + pos++).run();
				}
			}
		}
		return rid;
	}
	if (kind === "item") {
		const tkey = String(p.type || "");
		const rels = p.company ? [[
			"company",
			Number(p.company),
			""
		]] : [];
		return saveRecord(db, null, tkey, String(p.name), String(p.summary || ""), String(p.body || ""), p.data || {}, "", 0, 0, rels);
	}
	if (kind === "post" || kind === "job" || kind === "compose") return applyCompose(db, kind === "compose" ? p : {
		...p,
		kind
	}, author);
	throw new Error("Unknown submission type.");
}
async function applyCompose(db, p, author) {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const kind = String(p.kind || "blog");
	const intro = String(p.intro || p.subtitle || p.summary || "");
	const body = String(p.body || "");
	const title = String(p.title || p.name || "Untitled");
	const data = { date: { v: today } };
	if (p.cover) data.image = {
		v: p.cover,
		fit: "cover"
	};
	for (const k of [
		"origin",
		"source_site",
		"source_author",
		"credits",
		"references",
		"lab"
	]) if (p[k]) data[k] = { v: p[k] };
	const rels = [];
	if (kind === "research") {
		if (p.url) data.url = { v: p.url };
		if (p.authors) data.authors_text = { v: p.authors };
		if (p.as) rels.push([
			"orgs",
			Number(p.as),
			""
		]);
		return saveRecord(db, null, "paper", title, intro, body, data, "", 0, 0, rels);
	}
	const kindLabel = String(p.kind_label || kind.charAt(0).toUpperCase() + kind.slice(1));
	data.kind = { v: kind === "job" ? void 0 : kindLabel };
	if (kind !== "job" && author) data.byline = { v: String(author.username || "") };
	if (p.video) data.video = { v: p.video };
	if (p.url) data.link = { v: p.url };
	if (p.as) rels.push([
		kind === "job" ? "company" : "about",
		Number(p.as),
		""
	]);
	const cc = Array.isArray(p.cc) ? p.cc : p.cc ? [p.cc] : [];
	for (const id of cc) {
		const n = Number(id);
		if (n && n !== Number(p.as || 0)) rels.push([
			"about",
			n,
			"cc"
		]);
	}
	if (p.lab) rels.push([
		"lab",
		Number(p.lab),
		""
	]);
	if (kind === "job") {
		data.posted = { v: today };
		data.status = { v: "Open" };
		return saveRecord(db, null, "job", title, intro, body, data, "", 0, 0, rels);
	}
	return saveRecord(db, null, "post", title, intro, String(p.origin) === "Repost" ? "" : body, data, "", 0, 0, rels);
}
var CONNECTION_RELS = [
	"partners",
	"backed_by",
	"sells_to",
	"buys_from"
];
async function saveLeaders(db, target, leaders) {
	await db.prepare("DELETE FROM links WHERE src=? AND rel='leaders'").bind(target).run();
	const seen = /* @__PURE__ */ new Set();
	let pos = 0;
	for (const x of leaders.slice(0, 30)) {
		const name = String(x.name || "").trim().slice(0, 120);
		if (!name) continue;
		const row = await db.prepare("SELECT id FROM records WHERE type='person' AND name=? COLLATE NOCASE ORDER BY id LIMIT 1").bind(name).first();
		const pid = row ? Number(row.id) : await saveRecord(db, null, "person", name, "", "", {}, "", 0, 0, []);
		if (seen.has(pid)) continue;
		seen.add(pid);
		await db.prepare("INSERT INTO links(src,rel,dst,note,pos) VALUES(?,?,?,?,?)").bind(target, "leaders", pid, String(x.title || "").trim().slice(0, 80), pos++).run();
	}
}
async function setAuthor(db, sub, rid) {
	if (!rid) return;
	try {
		await db.prepare("UPDATE records SET author_id=? WHERE id=? AND (author_id IS NULL OR author_id=0)").bind(sub.user_id, rid).run();
	} catch {}
}
function shouldApplyDirect(auth, kind) {
	if (auth.is_admin) return true;
	if (!auth.logged) return false;
	if (kind === "claim") return can(auth, "claims");
	if ([
		"record_edit",
		"profile",
		"company_edit",
		"compose"
	].includes(kind)) return true;
	return can(auth, "create");
}
async function submitAndMaybeApply(db, auth, kind, target, payload) {
	const res = await db.prepare("INSERT INTO submissions(user_id,kind,target_id,payload,created) VALUES(?,?,?,?,?)").bind(auth.user.id, kind, target, JSON.stringify(payload), nowStamp()).run();
	const sid = Number(res.meta.last_row_id);
	if (shouldApplyDirect(auth, kind)) {
		const sub = await db.prepare("SELECT * FROM submissions WHERE id=?").bind(sid).first();
		const rid = await applySubmission(db, sub);
		await setAuthor(db, sub, rid);
		await db.prepare("UPDATE submissions SET status='approved', decided=?, decided_by=?, result_id=? WHERE id=?").bind(nowStamp(), auth.user.id, rid, sid).run();
	}
	return sid;
}
// backend/worker/src/account.ts
var HEX = /^#[0-9a-fA-F]{6}$/;
var HATS = new Set(LOOK_HATS.map(([k]) => k));
function walkerLook(u) {
	const uid = u?.id || 0;
	let lk = {};
	try {
		lk = JSON.parse(u?.prefs || "{}").walker || {};
	} catch {}
	return {
		b: HEX.test(lk.b || "") ? lk.b : WALK_COLORS[uid % WALK_COLORS.length],
		h: HEX.test(lk.h || "") ? lk.h : "#0d0d0d",
		hat: HATS.has(lk.hat) ? lk.hat : "none",
		hc: HEX.test(lk.hc || "") ? lk.hc : "#0d0d0d",
		// Username label colour. Empty means the default (black, or the accent for your own).
		nc: HEX.test(lk.nc || "") ? lk.nc : ""
	};
}
// Hats you unlock by doing things on the site. Admins have them all.
var EP_LOCKED_HATS = {
	hardhat: "Manage an organisation's page to unlock it.",
	bubble: "Send a message in the Lounge to unlock it.",
	explorer: "Walk your character on 10 different pages to unlock it."
};
var EP_HEAD_COLORS = ["#0d0d0d", "#f2d0b4", "#d9a47c", "#a86e44", "#6b4127", "#ffffff"];
function epWalkedCount(pr) {
	return Array.isArray(pr.walked) ? pr.walked.length : 0;
}
async function epHatLocks(db, u, pr) {
	const locks = {};
	if (u.role === "admin") return locks;
	let org = false, said = false;
	try {
		org = !!await db.prepare("SELECT 1 AS x FROM owners WHERE user_id=? LIMIT 1").bind(u.id).first();
	} catch {}
	try {
		said = !!await db.prepare("SELECT 1 AS x FROM room_chat WHERE user_id=? AND room='lounge' AND deleted=0 LIMIT 1").bind(u.id).first();
	} catch {}
	if (!org) locks.hardhat = EP_LOCKED_HATS.hardhat;
	if (!said) locks.bubble = EP_LOCKED_HATS.bubble;
	if (epWalkedCount(pr) < 10) locks.explorer = EP_LOCKED_HATS.explorer + " (" + epWalkedCount(pr) + " of 10 so far)";
	return locks;
}
async function savePrefs(db, uid, pr) {
	await db.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), uid).run();
}
async function accountPayload(c, tab = "overview") {
	const u = c.get("auth").user;
	const db = c.env.DB;
	const pr = prefsOf(u);
	const look = walkerLook(u);
	let prof = {};
	try {
		prof = JSON.parse(u.profile || "{}");
	} catch {}
	const v = (k) => prof[k]?.v || "";
	const counts = {
		posts: 0,
		saved: 0,
		pending: 0
	};
	try {
		counts.posts = Number((await db.prepare("SELECT COUNT(*) AS n FROM records WHERE author_id=? AND type IN ('post','paper')").bind(u.id).first())?.n || 0);
		counts.saved = Number((await db.prepare("SELECT COUNT(*) AS n FROM saves WHERE user_id=?").bind(u.id).first())?.n || 0);
		counts.pending = Number((await db.prepare("SELECT COUNT(*) AS n FROM submissions WHERE user_id=? AND status='pending'").bind(u.id).first())?.n || 0);
	} catch {}
	const companies = [];
	try {
		const { results } = await db.prepare("SELECT r.id, r.slug, r.name, r.summary FROM owners o JOIN records r ON r.id=o.company_id WHERE o.user_id=? ORDER BY r.name COLLATE NOCASE").bind(u.id).all();
		for (const r of results || []) companies.push(r);
	} catch {}
	const following = [];
	try {
		const { results } = await db.prepare("SELECT r.slug, r.name, r.summary FROM follows f JOIN records r ON r.id=f.company_id WHERE f.user_id=? ORDER BY r.name COLLATE NOCASE").bind(u.id).all();
		for (const r of results || []) following.push(r);
	} catch {}
	let posts = [];
	let saved = [];
	let submissions = [];
	let sessions = [];
	if (tab === "posts" || tab === "overview") try {
		const { results } = await db.prepare("SELECT id, slug, name, type, summary, created, feed_at FROM records WHERE author_id=? AND type IN ('post','paper') ORDER BY id DESC LIMIT 40").bind(u.id).all();
		posts = results || [];
	} catch {}
	if (tab === "saved") try {
		const { results } = await db.prepare("SELECT r.id, r.slug, r.name, r.type, r.summary FROM saves s JOIN records r ON r.id=s.record_id WHERE s.user_id=? ORDER BY s.created DESC LIMIT 40").bind(u.id).all();
		saved = results || [];
	} catch {}
	if (tab === "review") try {
		const { results } = await db.prepare("SELECT * FROM submissions WHERE user_id=? ORDER BY id DESC LIMIT 100").bind(u.id).all();
		submissions = (results || []).map((sb) => {
			const row = sb;
			let p = {};
			try {
				p = JSON.parse(String(row.payload || "{}"));
			} catch {}
			return {
				...row,
				title: p.name || p.company || p.title || "",
				label: subLabel(String(row.kind), p)
			};
		});
	} catch {}
	if (tab === "security") try {
		const { results } = await db.prepare("SELECT token, created, last_seen, ip, ua FROM sessions WHERE user_id=? ORDER BY last_seen DESC").bind(u.id).all();
		const mine = u._session;
		sessions = (results || []).map((s) => {
			const row = s;
			return {
				created: row.created,
				last_seen: row.last_seen,
				ip: row.ip,
				ua: row.ua,
				current: row.token === mine
			};
		});
	} catch {}
	return {
		tab,
		tabs: ACCOUNT_TABS,
		username: u.username,
		role: u.role,
		created: u.created,
		look,
		hats: LOOK_HATS,
		hat_locks: await epHatLocks(db, u, pr),
		walked: epWalkedCount(pr),
		byline: {
			name: v("name"),
			title: v("title"),
			organisation: v("organisation"),
			bio: v("bio")
		},
		email: String(pr.email || ""),
		email_verified: !!pr.email_verified,
		profile_vis: String(pr.profile_vis || "members"),
		place_show: !pr.place_hide,
		email_pending: await (async () => {
			try {
				const r = await db.prepare("SELECT email, expires FROM email_tokens WHERE user_id=? AND kind='email_change' AND used=0 ORDER BY created DESC LIMIT 1").bind(u.id).first();
				return r && String(r.expires) >= nowStamp() ? String(r.email) : "";
			} catch {
				return "";
			}
		})(),
		socials: pr.socials && typeof pr.socials === "object" ? pr.socials : {},
		totp: Boolean(u.totp),
		counts,
		companies,
		following,
		posts,
		saved,
		submissions,
		sessions,
		recovery_left: (() => {
			try {
				return JSON.parse(u.recovery || "[]").length;
			} catch {
				return 0;
			}
		})()
	};
}
async function postAccount(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const u = auth.user;
	const pr = prefsOf(u);
	const act = g.action;
	if (act === "privacy") {
		if (![
			"me",
			"members",
			"everyone"
		].includes(g.profile_vis)) return c.json({ error: "Choose who can see your profile." }, 400);
		pr.profile_vis = g.profile_vis;
		await savePrefs(c.env.DB, u.id, pr);
		return c.json({
			ok: true,
			message: "Profile visibility saved."
		});
	}
	if (act === "place") {
		const socials = {};
		for (const k of EP_SOCIALS) {
			const v = epSocial(k, g["social_" + k]);
			if (v === null) return c.json({ error: { x: "That X link or handle doesn't look right.", linkedin: "Use your LinkedIn profile link (linkedin.com/in/...).", discord: "Use your Discord username or a discord.gg invite link.", instagram: "That Instagram link or handle doesn't look right." }[k] }, 400);
			if (v) socials[k] = v;
		}
		if (EP_SOCIALS.some((k) => ("social_" + k) in g)) pr.socials = socials;
		if (g.place_show === "1") delete pr.place_hide;
		else pr.place_hide = true;
		await savePrefs(c.env.DB, u.id, pr);
		return c.json({
			ok: true,
			message: "Place settings saved."
		});
	}
	if (act === "card") {
		const clip = (k, n) => epMeow(String(g[k] || "").replace(/\s+/g, " ").trim().slice(0, n));
		const bio = epMeow(String(g.bio || "").replace(/\r/g, "").trim().slice(0, 400));
		let prof = {};
		try {
			prof = JSON.parse(String(u.profile || "{}"));
		} catch {}
		if (!prof || typeof prof !== "object") prof = {};
		prof.name = { ...(prof.name && typeof prof.name === "object" ? prof.name : {}), v: clip("name", 80) };
		prof.title = { ...(prof.title && typeof prof.title === "object" ? prof.title : {}), v: clip("title", 120) };
		prof.organisation = { ...(prof.organisation && typeof prof.organisation === "object" ? prof.organisation : {}), v: clip("organisation", 120) };
		prof.bio = { ...(prof.bio && typeof prof.bio === "object" ? prof.bio : {}), v: bio };
		const socials = {};
		for (const k of EP_SOCIALS) {
			const v = epSocial(k, g["social_" + k]);
			if (v === null) return c.json({ error: { x: "That X link or handle doesn't look right.", linkedin: "Use your LinkedIn profile link (linkedin.com/in/...).", discord: "Use your Discord username or a discord.gg invite link.", instagram: "That Instagram link or handle doesn't look right." }[k] }, 400);
			if (v) socials[k] = v;
		}
		pr.socials = socials;
		await c.env.DB.prepare("UPDATE users SET profile=?, prefs=? WHERE id=?").bind(JSON.stringify(prof), JSON.stringify(pr), u.id).run();
		return c.json({
			ok: true,
			message: "Card saved."
		});
	}
	if (act === "email" || act === "email_start") {
		const email = normEmail(String(g.email || "").slice(0, 200));
		if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return c.json({ error: "Enter a valid email address." }, 400);
		if (g.email2 != null && normEmail(String(g.email2)) !== email) return c.json({ error: "The two addresses don't match." }, 400);
		if (email === emailOf(u) && pr.email_verified) return c.json({ error: "That's already your email." }, 400);
		const { results: all } = await c.env.DB.prepare("SELECT id, prefs FROM users WHERE disabled=0 AND id<>?").bind(u.id).all();
		if ((all || []).some((x) => emailOf(x) === email)) return c.json({ error: "Another account already uses that email." }, 400);
		if (!await mailOn(c.env.DB, c.env)) return c.json({ error: "Email sending is off on this site right now. Try again later." }, 503);
		const ip = clientIp$2(c.req.raw);
		if (MAIL_IP.blocked(ip) || MAIL_IP.blocked("mail:" + email) || MAIL_IP.blocked("chg:" + u.id)) return c.json({ error: "Too many emails. Try again in an hour." }, 429);
		MAIL_IP.hit(ip);
		MAIL_IP.hit("mail:" + email);
		MAIL_IP.hit("chg:" + u.id);
		await ensureExtraSchema(c.env.DB);
		const code = sixDigit();
		const exp = new Date(Date.now() + 9e5).toISOString().slice(0, 19).replace("T", " ");
		await c.env.DB.prepare("UPDATE email_tokens SET used=1 WHERE user_id=? AND kind='email_change' AND used=0").bind(u.id).run();
		await c.env.DB.prepare("INSERT INTO email_tokens(token, user_id, kind, email, expires, used, created) VALUES(?,?,'email_change',?,?,0,?)").bind(tokenHash(`chg:${u.id}:${email}:${code}`), u.id, email, exp, nowStamp()).run();
		await sendMail(c.env.DB, c.env, {
			to: email,
			subject: `${SITE_NAME}: confirm your new email`,
			text: `Your code to confirm this email for @${u.username} is ${code}. It expires in 15 minutes.\n\nIf you didn't ask for this, ignore this email: nothing changes.\n`,
			html: `<p>Your code to confirm this email for <b>@${u.username}</b> is <strong>${code}</strong>. It expires in 15 minutes.</p><p>If you didn't ask for this, ignore this email: nothing changes.</p>`
		});
		return c.json({
			ok: true,
			message: `We sent a 6-digit code to ${email}. Enter it below to finish. Your current email keeps working until then.`
		});
	}
	if (act === "email_confirm") {
		await ensureExtraSchema(c.env.DB);
		const row = await c.env.DB.prepare("SELECT * FROM email_tokens WHERE user_id=? AND kind='email_change' AND used=0 ORDER BY created DESC LIMIT 1").bind(u.id).first();
		if (!row || String(row.expires) < nowStamp()) return c.json({ error: "That code has expired. Ask for a new one." }, 400);
		const digits = String(g.code || "").replace(/\s+/g, "");
		if (!/^\d{6}$/.test(digits)) return c.json({ error: "Enter the 6-digit code from the email." }, 400);
		const key = "chg:" + u.id;
		if (CODE_TRIES.blocked(key)) return c.json({ error: "Too many tries. Ask for a new code." }, 429);
		if (row.token !== tokenHash(`chg:${u.id}:${row.email}:${digits}`)) {
			CODE_TRIES.hit(key);
			return c.json({ error: "That code isn't right. Check the email and try again." }, 400);
		}
		await c.env.DB.prepare("UPDATE email_tokens SET used=1 WHERE token=?").bind(row.token).run();
		const old = emailOf(u);
		const oldOk = Boolean(pr.email_verified);
		pr.email = String(row.email);
		pr.email_verified = true;
		await savePrefs(c.env.DB, u.id, pr);
		if (old && oldOk && old !== pr.email) try {
			await sendMail(c.env.DB, c.env, {
				to: old,
				subject: `${SITE_NAME}: your email was changed`,
				text: `The email for @${u.username} was changed to ${pr.email}. If this wasn't you, reply to this email or write to ${CONTACT_EMAIL}.\n`,
				html: `<p>The email for <b>@${u.username}</b> was changed to ${pr.email}.</p><p>If this wasn't you, write to ${CONTACT_EMAIL}.</p>`
			});
		} catch {}
		return c.json({
			ok: true,
			message: "Email changed. Use the new address to sign in from now on."
		});
	}
	if (act === "email_cancel") {
		await c.env.DB.prepare("UPDATE email_tokens SET used=1 WHERE user_id=? AND kind='email_change' AND used=0").bind(u.id).run();
		return c.json({
			ok: true,
			message: "Email change cancelled."
		});
	}
	if (act === "password") return c.json({ error: "Accounts sign in with email or a connected service now." }, 410);
	return c.json({ error: "Unknown action." }, 400);
}
async function postCharacter(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const pr = prefsOf(auth.user);
	if (g.reset === "1") {
		delete pr.walker;
		await savePrefs(c.env.DB, auth.user.id, pr);
		return c.json({
			ok: true,
			message: "Back to the default look.",
			look: walkerLook({
				...auth.user,
				prefs: JSON.stringify(pr)
			})
		});
	}
	const isAdmin = auth.user.role === "admin";
	const presets = {
		b: WALK_COLORS,
		h: EP_HEAD_COLORS,
		hc: ["#0d0d0d", ...WALK_COLORS, "#ffffff"],
		nc: ["#0d0d0d", ...WALK_COLORS, "#ffffff"]
	};
	const pick = (k) => {
		const custom = g[k + "_custom"] || "";
		const touched = g[k + "_touched"];
		if (isAdmin && HEX.test(custom) && touched && custom.toLowerCase() !== (g[k] || "").toLowerCase()) return custom;
		const v = String(g[k] || "").toLowerCase();
		if (isAdmin) return g[k];
		return presets[k].find((x) => x.toLowerCase() === v) || "";
	};
	if (g.hat && EP_LOCKED_HATS[g.hat]) {
		const locks = await epHatLocks(c.env.DB, auth.user, pr);
		if (locks[g.hat]) return c.json({ error: "That hat is locked. " + locks[g.hat] }, 403);
	}
	const lk = {
		b: pick("b"),
		h: pick("h"),
		hat: g.hat,
		hc: pick("hc"),
		nc: pick("nc")
	};
	pr.walker = Object.fromEntries(Object.entries(lk).filter(([k, v]) => k === "hat" && HATS.has(v || "") || HEX.test(v || "")));
	await savePrefs(c.env.DB, auth.user.id, pr);
	return c.json({
		ok: true,
		message: "Saved. Your character uses this look the next time you walk.",
		look: walkerLook({
			...auth.user,
			prefs: JSON.stringify(pr)
		})
	});
}
async function postSecurity(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	const u = auth.user;
	const db = c.env.DB;
	const act = g.action;
	if (act === "on" || act === "off" || act === "newcodes" || act === "setup-secret") return c.json({ error: "Two-step login has been removed. Sign in with email or a connected service." }, 410);
	if (act === "others") {
		await endOtherSessions(db, u.id, u._session || "");
		return c.json({
			ok: true,
			message: "Logged out everywhere else."
		});
	}
	if (act === "delete") {
		if (g.confirm !== "DELETE") return c.json({ error: "Type DELETE to confirm." }, 400);
		const uname = `deleted-${u.id}`;
		await db.prepare("UPDATE users SET username=?, name='Former member', pw='!', prefs='{}', profile='{}', disabled=1, totp='', recovery='[]', suspended_until='', suspend_reason='' WHERE id=?").bind(uname, u.id).run();
		await db.prepare("DELETE FROM sessions WHERE user_id=?").bind(u.id).run();
		const https = auth.https;
		const res = c.json({
			ok: true,
			next: "/"
		});
		res.headers.append("Set-Cookie", clearSidCookie(https));
		return res;
	}
	return c.json({ error: "Unknown action." }, 400);
}
async function exportMine(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const u = { ...auth.user };
	delete u.pw;
	delete u.totp;
	delete u.recovery;
	delete u.totp_step;
	delete u._session;
	return c.json({
		user: u,
		exported: nowStamp()
	});
}
// backend/worker/src/users.ts
async function usersPayload(c) {
	const { results } = await c.env.DB.prepare("SELECT * FROM users ORDER BY role, username COLLATE NOCASE").all();
	const users = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf(u);
		let companies = [];
		try {
			companies = (await c.env.DB.prepare("SELECT r.id, r.slug, r.name FROM owners o JOIN records r ON r.id=o.company_id WHERE o.user_id=?").bind(u.id).all()).results || [];
		} catch {}
		users.push({
			id: u.id,
			username: u.username,
			role: u.role,
			disabled: u.disabled,
			created: u.created,
			suspended: isSuspended(u),
			suspended_until: u.suspended_until,
			suspend_reason: u.suspend_reason,
			status: u.disabled ? "Disabled" : isSuspended(u) ? "Suspended" : "Active",
			suspension_text: isSuspended(u) ? suspensionText(u) : "",
			perms: Array.isArray(pr.perms) ? pr.perms : [],
			email: typeof pr.email === "string" ? pr.email : "",
			companies
		});
	}
	return {
		users,
		contrib_perms: CONTRIB_PERMS,
		signup_mode: await signupMode(c.env.DB),
		signup_code: await (await Promise.resolve().then(() => session_exports)).setting(c.env.DB, "signup_code")
	};
}
async function postUsers(c) {
	const auth = c.get("auth");
	if (!auth.is_admin) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = Object.fromEntries(Object.entries(all).map(([k, v]) => [k, v[v.length - 1] || ""]));
	const act = g.action;
	if (act === "create") {
		const role = [
			"admin",
			"contributor",
			"user"
		].includes(g.role) ? g.role : "user";
		const email = normEmail(g.email || "");
		if (!EMAIL_RE.test(email)) return c.json({ error: "Enter a valid email address." }, 400);
		if (await getUserByEmail(c.env.DB, email)) return c.json({ error: "That email already has an account." }, 400);
		const made = await createUser(c.env.DB, g.username || "", "", role);
		if (made.error || !made.id) return c.json({ error: made.error || "Could not create the user." }, 400);
		await setUserEmail(c.env.DB, made.id, email, false);
		return c.json({
			ok: true,
			message: "User created. They can sign in with that email.",
			id: made.id
		});
	}
	if (act === "code") {
		const mode = [
			"open",
			"code",
			"closed"
		].includes(g.mode) ? g.mode : "open";
		if (mode === "code" && !(g.code || "").trim()) return c.json({ error: "Code mode needs a code." }, 400);
		await setSetting(c.env.DB, "signup_code", (g.code || "").trim());
		await setSetting(c.env.DB, "signup_mode", mode);
		return c.json({
			ok: true,
			message: `Sign-up: ${mode}.`
		});
	}
	const uid = Number(g.uid);
	const row = Number.isFinite(uid) ? await c.env.DB.prepare("SELECT * FROM users WHERE id=?").bind(uid).first() : null;
	if (!row) return c.json({ error: "User not found." }, 404);
	if (act === "resetpw") return c.json({ error: "Accounts sign in with email or a connected service now." }, 410);
	if (uid === auth.user.id) return c.json({ error: "You can't change your own role or status here." }, 400);
	if (act === "disable" || act === "enable") {
		await c.env.DB.prepare("UPDATE users SET disabled=? WHERE id=?").bind(act === "disable" ? 1 : 0, uid).run();
		if (act === "disable") await c.env.DB.prepare("DELETE FROM sessions WHERE user_id=?").bind(uid).run();
	} else if (act === "suspend") {
		const days = [
			"1",
			"7",
			"30",
			"forever"
		].includes(g.days) ? g.days : "7";
		const reason = (g.reason || "").trim() || "Breaking the site rules";
		const until = days === "forever" ? "forever" : new Date(Date.now() + Number(days) * 864e5).toISOString().slice(0, 19).replace("T", " ");
		await c.env.DB.prepare("UPDATE users SET suspended_until=?, suspend_reason=? WHERE id=?").bind(until, reason, uid).run();
		await c.env.DB.prepare("DELETE FROM sessions WHERE user_id=?").bind(uid).run();
	} else if (act === "unsuspend") await c.env.DB.prepare("UPDATE users SET suspended_until='', suspend_reason='' WHERE id=?").bind(uid).run();
	else if (act === "role") {
		const role = [
			"user",
			"contributor",
			"admin"
		].includes(g.role) ? g.role : "user";
		await c.env.DB.prepare("UPDATE users SET role=? WHERE id=?").bind(role, uid).run();
	} else if (act === "perms") {
		const pr = prefsOf(row);
		const valid = new Set(CONTRIB_PERMS.map(([k]) => k));
		pr.perms = (all.perm || (g.perm ? [g.perm] : [])).filter((x) => valid.has(x));
		await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), uid).run();
	}
	return c.json({
		ok: true,
		message: "Saved."
	});
}
// backend/worker/src/review.ts
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
// backend/worker/src/db.ts
function parseData(raw) {
	if (!raw) return {};
	if (typeof raw === "object") return raw;
	try {
		const v = JSON.parse(raw);
		return v && typeof v === "object" ? v : {};
	} catch {
		return {};
	}
}
function loadRow(row) {
	return {
		id: Number(row.id),
		type: String(row.type),
		slug: String(row.slug),
		name: String(row.name),
		summary: String(row.summary ?? ""),
		body: row.body != null ? String(row.body) : void 0,
		data: parseData(row.data),
		notes: row.notes != null ? String(row.notes) : void 0,
		private: Number(row.private ?? 0),
		watch: Number(row.watch ?? 0),
		demo: Number(row.demo ?? 0),
		created: row.created ?? null,
		updated: row.updated ?? null,
		feed_at: row.feed_at ?? null,
		author_id: row.author_id == null ? null : Number(row.author_id)
	};
}
function typeLabel(rec) {
	const cat = categoryKey(rec);
	if (cat && HW_CAT[cat]) return HW_CAT[cat].label;
	return TYPE_LABELS[rec.type]?.label || rec.type;
}
async function allPublic(db, sql, ...binds) {
	const { results } = await db.prepare(sql).bind(...binds).all();
	return (results || []).map((r) => loadRow(r));
}
async function onePublic(db, slug) {
	const row = await db.prepare("SELECT * FROM records WHERE slug = ? AND private = 0").bind(slug).first();
	return row ? loadRow(row) : null;
}
async function linksFor(db, ids) {
	const outgoing = /* @__PURE__ */ new Map();
	const incoming = /* @__PURE__ */ new Map();
	if (!ids.length) return {
		outgoing,
		incoming
	};
	// D1 allows at most 100 bound parameters per query, so pass the id list as one JSON parameter.
	const ph = "SELECT value FROM json_each(?1)";
	const { results } = await db.prepare(`SELECT l.src, l.dst, l.rel, l.note,
            s.slug AS s_slug, s.name AS s_name, s.type AS s_type, s.summary AS s_summary,
            d.slug AS d_slug, d.name AS d_name, d.type AS d_type, d.summary AS d_summary,
            d.id AS d_id, s.id AS s_id
     FROM links l
     JOIN records s ON s.id = l.src
     JOIN records d ON d.id = l.dst
     WHERE (l.src IN (${ph}) OR l.dst IN (${ph}))
       AND s.private = 0 AND d.private = 0
     ORDER BY l.pos, l.id`).bind(JSON.stringify(ids)).all();
	for (const raw of results || []) {
		const r = raw;
		const src = Number(r.src);
		const dst = Number(r.dst);
		const rel = String(r.rel);
		const note = r.note ? String(r.note) : "";
		if (ids.includes(src)) {
			const bag = outgoing.get(src) || {};
			(bag[rel] ||= []).push({
				id: Number(r.d_id),
				slug: String(r.d_slug),
				name: String(r.d_name),
				type: String(r.d_type),
				summary: String(r.d_summary || ""),
				note
			});
			outgoing.set(src, bag);
		}
		if (ids.includes(dst)) {
			const bag = incoming.get(dst) || {};
			(bag[rel] ||= []).push({
				id: Number(r.s_id),
				slug: String(r.s_slug),
				name: String(r.s_name),
				type: String(r.s_type),
				summary: String(r.s_summary || ""),
				note
			});
			incoming.set(dst, bag);
		}
	}
	return {
		outgoing,
		incoming
	};
}
async function allByIds(db, ids) {
	const map = /* @__PURE__ */ new Map();
	if (!ids.length) return map;
	const uniq = [...new Set(ids)];
	const rows = await allPublic(db, `SELECT * FROM records WHERE id IN (SELECT value FROM json_each(?)) AND private = 0`, JSON.stringify(uniq));
	for (const r of rows) map.set(r.id, r);
	return map;
}
async function setting(db, key) {
	return (await db.prepare("SELECT value FROM settings WHERE key = ?").bind(key).first())?.value ?? "";
}
async function socialCounts(db, ids) {
	const likes = /* @__PURE__ */ new Map();
	const comments = /* @__PURE__ */ new Map();
	if (!ids.length) return {
		likes,
		comments
	};
	const ph = "SELECT value FROM json_each(?)";
	const idsJson = JSON.stringify(ids);
	try {
		const { results } = await db.prepare(`SELECT record_id AS id, COUNT(*) AS n FROM likes WHERE record_id IN (${ph}) GROUP BY record_id`).bind(idsJson).all();
		for (const r of results || []) likes.set(Number(r.id), Number(r.n));
	} catch {}
	try {
		const { results } = await db.prepare(`SELECT record_id AS id, COUNT(*) AS n FROM comments WHERE record_id IN (${ph}) AND status = 'approved' GROUP BY record_id`).bind(idsJson).all();
		for (const r of results || []) comments.set(Number(r.id), Number(r.n));
	} catch {}
	return {
		likes,
		comments
	};
}
// backend/worker/src/social.ts
async function isOwner(db, userId, companyId) {
	const row = await db.prepare("SELECT 1 AS n FROM owners WHERE user_id=? AND company_id=?").bind(userId, companyId).first();
	return Boolean(row);
}
async function ownedCompanies(db, userId) {
	const { results } = await db.prepare("SELECT r.* FROM records r JOIN owners o ON o.company_id=r.id WHERE o.user_id=? ORDER BY r.name COLLATE NOCASE").bind(userId).all();
	return (results || []).map((r) => loadRow(r));
}
function emailOk(user) {
	if (!user) return false;
	try {
		const p = JSON.parse(user.prefs || "{}");
		return Boolean(p.email_verified || p.email_ok || p.verified);
	} catch {
		return false;
	}
}
async function needsVerified(c) {
	const auth = c.get("auth");
	if (!auth.user || auth.is_admin) return false;
	if (!await mailConfigured(c.env.DB, c.env)) return false;
	if (emailOk(auth.user)) return false;
	return true;
}
// Curse words become animal noises (Julian, 2026-11-19). Whole words only, so "class" or "Scunthorpe" stay as they are.
var EP_ANIMAL_NOISES = ["meow", "woof", "moo", "oink", "quack", "baa", "ribbit", "hoot", "neigh", "cluck", "squeak", "honk"];
var EP_CURSE_RE = new RegExp("\\b(?:" + [
	"(?:mother|mutha)?f[u*@#]+c?k+(?:s|ed|er|ers|in|ing|ings|face|head|wit|off|tard)?",
	"f[u*]{1,2}k|fck(?:ing|in|er|s)?|fcuk|fuq|feck(?:ing)?|wtf|stfu|ffs|gtfo",
	"(?:bull|horse|dip|ape)?sh[i!1*]+t+(?:s|e|ty|tier|ting|ted|head|heads|hole|face|show|load)?",
	"b[i!1*]+tch(?:es|y|ing|ed)?|son of a bitch",
	"(?:dumb|jack|smart|kick|bad|fat|lard|hard)?ass(?:hole|holes|hat|hats|wipe|wipes|clown|es)?|arse(?:hole|holes)?",
	"a[s$*]{2}hole|dickhead(?:s)?|dick(?:s|ish|wad)|cocksucker(?:s)?",
	"c[u*]nt(?:s|y)?|twat(?:s)?|wanker(?:s)?|wank(?:ing|ed|s)?|prick(?:s)?|bellend(?:s)?|knobhead(?:s)?",
	"bastard(?:s)?|bollocks|bugger(?:ed|ing|s)?|bloody|sod off",
	"(?:god)?damn(?:ed|it|n)?|dammit|crap(?:py|s)?|piss(?:ed|es|ing|er)?|pissoff",
	"slut(?:s|ty)?|whore(?:s)?|douche(?:bag|bags|s)?|skank(?:s|y)?",
	"jerkoff|jackoff|jizz|dildo(?:s)?"
].join("|") + ")\\b", "gi");
function epMeow(text) {
	if (!text) return text;
	return String(text).replace(EP_CURSE_RE, (w) => {
		let h = 0;
		for (const ch of w.toLowerCase()) h = h * 31 + ch.charCodeAt(0) >>> 0;
		// Picked from the word, so the server and the walker's own screen show the same noise.
		const n = EP_ANIMAL_NOISES[h % EP_ANIMAL_NOISES.length];
		return w.length > 1 && w === w.toUpperCase() ? n.toUpperCase() : /^[A-Z]/.test(w) ? n[0].toUpperCase() + n.slice(1) : n;
	});
}
async function checkText(db, text, auth) {
	if (auth.logged) return "";
	const words = (await setting$1(db, "spam_blocklist") || "").split(/\n+/).map((w) => w.trim().toLowerCase()).filter(Boolean);
	const low = text.toLowerCase();
	for (const w of words) if (w && low.includes(w)) return "This message can't be posted.";
	const links = text.match(/https?:\/\/|www\./gi) || [];
	const created = auth.user?.created ? Date.parse(String(auth.user.created).replace(" ", "T")) : 0;
	if (links.length && created && Date.now() - created < 6048e5) return "Links can't be posted in the first week.";
	if (links.length > 2) return "Please include at most two links.";
	return "";
}
async function visible(db, auth, row) {
	if (!row) return false;
	if (!Number(row.private || 0)) return true;
	return Boolean(auth.see_private || auth.logged);
}
var TOGGLE = {
	like: {
		table: "likes",
		col: "record_id"
	},
	save: {
		table: "saves",
		col: "record_id"
	},
	follow: {
		table: "follows",
		col: "company_id"
	}
};
async function apiToggle(c, kind, ridRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const spec = TOGGLE[kind];
	if (!spec) return c.json({ error: "not found" }, 404);
	const rid = Number(ridRaw);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
	if (!row || !await visible(c.env.DB, auth, row)) return c.json({ error: "not found" }, 404);
	const rec = loadRow(row);
	if (kind === "follow" && !ORG_TYPES_LIST.includes(rec.type)) return c.json({ error: "not found" }, 404);
	const exists = await c.env.DB.prepare(`SELECT 1 AS n FROM ${spec.table} WHERE user_id=? AND ${spec.col}=?`).bind(auth.user.id, rid).first();
	if (exists) await c.env.DB.prepare(`DELETE FROM ${spec.table} WHERE user_id=? AND ${spec.col}=?`).bind(auth.user.id, rid).run();
	else await c.env.DB.prepare(`INSERT INTO ${spec.table}(user_id,${spec.col},created) VALUES(?,?,?)`).bind(auth.user.id, rid, nowStamp()).run();
	const count = Number((await c.env.DB.prepare(`SELECT COUNT(*) AS n FROM ${spec.table} WHERE ${spec.col}=?`).bind(rid).first())?.n || 0);
	return c.json({
		on: !exists,
		count
	});
}
async function postComment(c, ridRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) {
		if (c.req.header("accept")?.includes("json") || c.req.path.startsWith("/api/")) return c.json({ error: "Log in first." }, 401);
		return c.redirect("/login");
	}
	const rid = Number(ridRaw);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
	if (!row || !await visible(c.env.DB, auth, row)) return notFound(c);
	const rec = loadRow(row);
	if (!COMMENTABLE.includes(rec.type)) return notFound(c);
	const all = await formAll(c);
	const body = epMeow(((all.body || [""]).slice(-1)[0] || "").trim().slice(0, 2e3));
	const back = `/r/${rec.slug}`;
	const json = c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json");
	if (body && await needsVerified(c)) return json ? c.json({ error: "Confirm your email first: see Account, then Settings." }, 403) : c.redirect(back + "?cerr=verify#comments");
	if (body && !auth.logged && !await turnstileOk(c.env, (all["cf-turnstile-response"] || [""]).slice(-1)[0] || "", auth.ip)) return json ? c.json({ error: "Please complete the check." }, 400) : c.redirect(back + "?cerr=check#comments");
	const problem = body ? await checkText(c.env.DB, body, auth) : "";
	if (problem) return json ? c.json({ error: problem }, 400) : c.redirect(back + `?cerr=${encodeURIComponent(problem)}#comments`);
	if (body) {
		const last = await c.env.DB.prepare("SELECT MAX(created) AS t FROM comments WHERE user_id=?").bind(auth.user.id).first();
		if (!(last?.t && Date.now() - Date.parse(String(last.t).replace(" ", "T")) < 5e3)) {
			const status = can(auth, "review") ? "approved" : "pending";
			await c.env.DB.prepare("INSERT INTO comments(record_id,user_id,body,status,created) VALUES(?,?,?,?,?)").bind(rec.id, auth.user.id, body, status, nowStamp()).run();
		}
	}
	if (json) {
		const items = await commentsFor(c.env.DB, rec.id, auth);
		return c.json({
			ok: true,
			comments: items,
			next: back + "#comments"
		});
	}
	return c.redirect(back + "#comments");
}
async function postCommentDelete(c, cidRaw) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login");
	const cid = Number(cidRaw);
	const row = await c.env.DB.prepare("SELECT c.*, r.slug FROM comments c JOIN records r ON r.id=c.record_id WHERE c.id=?").bind(cid).first();
	if (row && (can(auth, "review") || row.user_id === auth.user.id)) {
		await c.env.DB.prepare("DELETE FROM comments WHERE id=?").bind(row.id).run();
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json") || (c.req.header("accept") || "").includes("json")) return c.json({
			ok: true,
			next: `/r/${row.slug}#comments`
		});
		return c.redirect(`/r/${row.slug}#comments`);
	}
	return notFound(c);
}
async function commentsFor(db, rid, auth) {
	const { results } = await db.prepare(`SELECT c.id, c.body, c.created, c.status, c.user_id, u.name AS uname, u.username
     FROM comments c LEFT JOIN users u ON u.id=c.user_id
     WHERE c.record_id=? AND (c.status='approved' OR (? AND (c.user_id=? OR ?)))
     ORDER BY c.id`).bind(rid, auth.user ? 1 : 0, auth.user?.id || 0, can(auth, "review") ? 1 : 0).all();
	return (results || []).map((r) => {
		const x = r;
		return {
			id: x.id,
			name: x.uname || x.username || "Member",
			body: x.body,
			created: x.created,
			status: x.status,
			mine: auth.user?.id === x.user_id
		};
	});
}
async function socialState(db, auth, ids) {
	const empty = {
		likes: /* @__PURE__ */ new Map(),
		comments: /* @__PURE__ */ new Map(),
		liked: /* @__PURE__ */ new Set(),
		saved: /* @__PURE__ */ new Set(),
		following: /* @__PURE__ */ new Set(),
		watching: /* @__PURE__ */ new Set()
	};
	if (!ids.length) return empty;
	const ph = "SELECT value FROM json_each(?)";
	const idsJson = JSON.stringify(ids);
	const count = async (table, col) => {
		const { results } = await db.prepare(`SELECT ${col} AS id, COUNT(*) AS n FROM ${table} WHERE ${col} IN (${ph}) GROUP BY ${col}`).bind(idsJson).all();
		const m = /* @__PURE__ */ new Map();
		for (const r of results || []) m.set(Number(r.id), Number(r.n));
		return m;
	};
	const likes = await count("likes", "record_id");
	const comments = await count("comments", "record_id");
	const liked = /* @__PURE__ */ new Set();
	const saved = /* @__PURE__ */ new Set();
	const following = /* @__PURE__ */ new Set();
	const watching = /* @__PURE__ */ new Set();
	if (auth.user) {
		const mark = async (sql, set, ...extra) => {
			const { results } = await db.prepare(sql).bind(...extra, idsJson).all();
			for (const r of results || []) set.add(Number(r.id));
		};
		await mark(`SELECT record_id AS id FROM likes WHERE user_id=? AND record_id IN (${ph})`, liked, auth.user.id);
		await mark(`SELECT record_id AS id FROM saves WHERE user_id=? AND record_id IN (${ph})`, saved, auth.user.id);
		await mark(`SELECT company_id AS id FROM follows WHERE user_id=? AND company_id IN (${ph})`, following, auth.user.id);
		await mark(`SELECT CAST(ref AS INTEGER) AS id FROM watch_sources WHERE user_id=? AND kind='record' AND CAST(ref AS INTEGER) IN (${ph})`, watching, auth.user.id);
	}
	return {
		likes,
		comments,
		liked,
		saved,
		following,
		watching
	};
}
async function postWatch(c, slug) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/r/" + slug);
	const row = await c.env.DB.prepare("SELECT id, type, private, slug FROM records WHERE slug=?").bind(slug).first();
	if (!row || !await visible(c.env.DB, auth, row)) return notFound(c);
	if (ORG_TYPES_LIST.includes(row.type)) {
		if (await c.env.DB.prepare("SELECT 1 AS n FROM follows WHERE user_id=? AND company_id=?").bind(auth.user.id, row.id).first()) await c.env.DB.prepare("DELETE FROM follows WHERE user_id=? AND company_id=?").bind(auth.user.id, row.id).run();
		else await c.env.DB.prepare("INSERT INTO follows(user_id,company_id,created) VALUES(?,?,?)").bind(auth.user.id, row.id, nowStamp()).run();
	}
	// Only organisations can be followed; watching other records is switched off.
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json")) return c.json({
		ok: true,
		next: "/r/" + slug
	});
	const ref = new URL(c.req.header("referer") || "http://local/r/" + slug).pathname;
	return c.redirect(ref.startsWith("/watchlist") ? ref : "/r/" + slug);
}
async function apiUfollow(c, uidRaw) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const uid = Number(uidRaw);
	if (!uid || uid === auth.user.id) return c.json({ error: "not found" }, 404);
	const ex = await c.env.DB.prepare("SELECT 1 AS n FROM user_follows WHERE follower_id=? AND followee_id=?").bind(auth.user.id, uid).first();
	if (ex) await c.env.DB.prepare("DELETE FROM user_follows WHERE follower_id=? AND followee_id=?").bind(auth.user.id, uid).run();
	else await c.env.DB.prepare("INSERT OR IGNORE INTO user_follows(follower_id,followee_id,created) VALUES(?,?,?)").bind(auth.user.id, uid, nowStamp()).run();
	return c.json({ on: !ex });
}
var REPORT_REASONS = [
	"Spam",
	"Harassment",
	"Misinformation",
	"Offensive",
	"Copyright",
	"Other"
];
async function postReport(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const all = await formAll(c).catch(async () => {
		const b = await readBody(c);
		const o = {};
		for (const [k, v] of Object.entries(b)) o[k] = [String(v)];
		return o;
	});
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const kind = g("kind");
	const tid = g("id");
	if (![
		"record",
		"comment",
		"chat",
		"user"
	].includes(kind) || !/^\d+$/.test(tid)) return c.json({ error: "Bad report." }, 400);
	const reason = REPORT_REASONS.includes(g("reason")) ? g("reason") : "Other";
	if (!await c.env.DB.prepare("SELECT 1 AS n FROM reports WHERE user_id=? AND kind=? AND target_id=? AND status='open'").bind(auth.user.id, kind, Number(tid)).first()) await c.env.DB.prepare("INSERT INTO reports(user_id,kind,target_id,reason,note,status,created) VALUES(?,?,?,?,?,'open',?)").bind(auth.user.id, kind, Number(tid), reason, g("note").slice(0, 500), nowStamp()).run();
	const back = g("back") || "/";
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		next: back
	});
	return c.redirect(back);
}
function notFound(c) {
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({ error: "Not found" }, 404);
	return c.text("Not found", 404);
}
// backend/worker/src/edit.ts
var TYPES = typesSchema_default;
async function editPayload(c, slug, tkey) {
	const db = c.env.DB;
	const auth = c.get("auth");
	let rec = null;
	if (slug) {
		const row = await db.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
		if (!row) return {
			error: "Not found",
			status: 404
		};
		rec = loadRow(row);
		tkey = rec.type;
	}
	if (!tkey || !TYPES[tkey]) return {
		error: "Unknown type",
		status: 404
	};
	const t = TYPES[tkey];
	const fields = t.fields.filter((f) => !f.private || auth.see_private);
	let outgoing = {};
	if (rec) {
		const { results } = await db.prepare("SELECT l.rel, r.id, r.name, r.slug, r.type FROM links l JOIN records r ON r.id=l.dst WHERE l.src=?").bind(rec.id).all();
		for (const raw of results || []) {
			const r = raw;
			(outgoing[r.rel] ||= []).push({
				id: r.id,
				name: r.name,
				slug: r.slug,
				type: r.type
			});
		}
	}
	return {
		type: tkey,
		type_label: t.label,
		fields,
		relations: t.relations,
		record: rec,
		outgoing,
		can_delete: Boolean(rec && can(auth, "create")),
		see_private: auth.see_private
	};
}
async function newChooser() {
	return { types: Object.entries(TYPES).map(([key, t]) => ({
		key,
		label: t.label
	})) };
}
async function postSave(c) {
	const auth = c.get("auth");
	const all = await formAll(c);
	const g = (k) => (all[k] || [""])[(all[k] || [""]).length - 1];
	const tkey = g("type");
	if (!TYPES[tkey]) return c.json({ error: "Unknown type" }, 400);
	const t = TYPES[tkey];
	const rid = /^\d+$/.test(g("id")) ? Number(g("id")) : null;
	const name = g("name").trim().slice(0, 200);
	if (!name) return c.json({ error: "Name is required" }, 400);
	if (!rid && !can(auth, "create")) return c.json({ error: "Creating pages needs the Create privilege" }, 403);
	let data = {};
	let old = null;
	if (rid) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(rid).first();
		if (!row) return c.json({ error: "Not found" }, 404);
		old = {
			data: JSON.parse(String(row.data || "{}")),
			notes: String(row.notes || ""),
			private: Number(row.private || 0),
			watch: Number(row.watch || 0)
		};
		data = { ...old.data };
	}
	for (const f of t.fields) {
		if (f.private && !auth.see_private) continue;
		const raw = g("f." + f.key) || g(f.key);
		if (raw !== "") data[f.key] = { v: raw };
		else delete data[f.key];
	}
	const rels = [];
	for (const rel of t.relations) {
		let ids = (all["rel." + rel.key] || []).flatMap((x) => x.split(/[,\s]+/)).filter((x) => /^\d+$/.test(x)).map(Number);
		if (!rel.many) ids = ids.slice(0, 1);
		if (rel.max) ids = ids.slice(0, rel.max);
		for (const dst of ids) rels.push([
			rel.key,
			dst,
			""
		]);
	}
	const notes = auth.see_private ? g("notes") : old?.notes || "";
	const priv = auth.see_private ? g("private") ? 1 : 0 : old?.private || 0;
	const introMax = tkey === "post" || tkey === "paper" ? 200 : 300;
	if (!auth.logged) {
		await submitAndMaybeApply(c.env.DB, auth, rid ? "record_edit" : "item", rid, {
			type: tkey,
			name,
			summary: g("summary").trim().slice(0, introMax),
			body: g("body"),
			data
		});
		return c.json({
			ok: true,
			queued: true,
			next: "/account/review"
		});
	}
	const id = await saveRecord(c.env.DB, rid, tkey, name, g("summary").trim().slice(0, introMax), g("body"), data, notes, priv, old?.watch || 0, rels);
	const slug = (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(id).first()).slug;
	return c.json({
		ok: true,
		id,
		slug,
		next: "/r/" + slug
	});
}
async function composePayload(c, companySlug) {
	const auth = c.get("auth");
	const owned = auth.user ? await ownedCompanies(c.env.DB, auth.user.id) : [];
	let company = null;
	if (companySlug) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(companySlug).first();
		if (row) company = loadRow(row);
	}
	if (auth.logged && !company) {
		const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(SITE_ORG_SLUG).first();
		if (row) company = loadRow(row);
	}
	let pending = [];
	if (auth.user) {
		const { results } = await c.env.DB.prepare("SELECT * FROM submissions WHERE user_id=? AND kind IN ('compose','post') AND status='pending' ORDER BY id DESC").bind(auth.user.id).all();
		pending = (results || []).map((sb) => {
			const p = JSON.parse(String(sb.payload || "{}"));
			return {
				id: sb.id,
				name: p.name || p.title,
				kind: p.kind,
				intro: p.intro
			};
		});
	}
	return {
		user: Boolean(auth.user),
		logged: auth.logged,
		page_only: true,
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name,
			type: o.type
		})),
		company: company ? {
			id: company.id,
			slug: company.slug,
			name: company.name,
			type: company.type
		} : null,
		kinds: COMPOSE_KINDS,
		intro_max: 200,
		pending,
		note: auth.logged ? "Goes live straight away." : "Goes live after review."
	};
}
async function postCompose(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first: see Account, then Settings." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const title = (g("title") || g("name")).slice(0, 200);
	const back = g("back") || "/";
	if (!title) return c.json({
		error: "A title is required.",
		next: back + "?cerr=A%20title%20is%20required."
	}, 400);
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM submissions WHERE user_id=? AND status='pending'").bind(auth.user.id).first())?.n || 0) >= 25) return c.json({ error: "You have 25 items waiting for review." }, 400);
	const rawKind = KIND_ALIAS[g("kind")] || g("kind") || "blog";
	const kindPair = COMPOSE_KINDS.find(([k]) => k === rawKind) || COMPOSE_KINDS[0];
	const origin = g("origin") === "Repost" ? "Repost" : "Original";
	let asId = Number(g("as") || 0) || null;
	{
		if (!asId && auth.logged) asId = (await c.env.DB.prepare("SELECT id FROM records WHERE slug=?").bind("embodiment-place").first())?.id || null;
		if (!asId) return c.json({ error: "Posts are published through a page." }, 400);
		const org = await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(asId).first();
		if (!org || !ORG_TYPES_LIST.includes(String(org.type))) return c.json({ error: "Posts are published through a page." }, 400);
		if (!auth.logged && !await isOwner(c.env.DB, auth.user.id, asId)) return c.json({ error: "You can only post from a page you manage." }, 403);
	}
	if (!auth.logged && !await turnstileOk(c.env, g("cf-turnstile-response"), c.get("auth").ip)) return c.json({ error: "Please complete the check." }, 400);
	const intro = g("intro") || g("summary");
	const body = origin === "Repost" ? "" : g("body") || "";
	const problem = await checkText(c.env.DB, title + " " + intro + " " + body, auth);
	if (problem) return c.json({ error: problem }, 400);
	let credits = g("credits");
	try {
		if (typeof credits === "string" && credits.trim().startsWith("[")) credits = JSON.parse(credits);
	} catch {}
	let references = g("references");
	try {
		if (typeof references === "string" && references.trim().startsWith("[")) references = JSON.parse(references);
	} catch {}
	const cc = (all.cc || all["rel.cc"] || []).map(Number).filter((n) => n > 0);
	const payload = {
		kind: kindPair[0],
		kind_label: kindPair[1],
		title,
		name: title,
		intro,
		body,
		url: g("url"),
		video: g("video"),
		cover: g("cover"),
		origin,
		source_site: g("source_site"),
		source_author: g("source_author"),
		authors: g("authors"),
		credits,
		references,
		as: asId,
		cc,
		lab: g("lab") ? Number(g("lab")) : null
	};
	const sid = await submitAndMaybeApply(c.env.DB, auth, "compose", null, payload);
	const applied = await c.env.DB.prepare("SELECT result_id, status FROM submissions WHERE id=?").bind(sid).first();
	const next = applied?.result_id ? (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(applied.result_id).first())?.slug ? "/r/" + (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(applied.result_id).first()).slug : "/" : back.split("?")[0] + "?posted=1";
	return c.json({
		ok: true,
		id: sid,
		next: applied?.status === "approved" ? next.startsWith("/r/") ? next : "/" : back.split("?")[0] + "?posted=1"
	});
}
async function postDelete(c, slug) {
	const row = await c.env.DB.prepare("SELECT id, type FROM records WHERE slug=?").bind(slug).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	await c.env.DB.prepare("DELETE FROM records WHERE id=?").bind(row.id).run();
	try {
		await c.env.DB.prepare("DELETE FROM fts WHERE rowid=?").bind(row.id).run();
	} catch {}
	return c.json({
		ok: true,
		next: "/t/" + row.type
	});
}
// shared/legal.ts
/** Default page drafts, copied from the Python site (ep.config / ep.legal). */
var ABOUT_MD = "# About embodiment.place\n\nembodiment.place is a research tracker, blog and database for humanoid robotics and embodied AI: the organisations, robots, hardware (humanoids, hands and actuators), models, software, people, funding, deployments, papers and events in the field. Each record is stored once and shows up on every page it's linked to.\n\n## Independent\n\nIt is a personal, independent project. It is not affiliated with, endorsed by or sponsored by any employer of the operator, or any company, university, lab or person listed on the site, and it doesn't speak for them. Names and trademarks belong to their owners and are used only to identify them.\n\n## What's here\n\n- **Feed:** blogs, research papers, news and videos from people and organisations in the field.\n- **Organisations:** companies, universities, labs and investors, with their products, people, funding and deployments.\n- **Hardware:** humanoids, hands and actuators, each with a spec page and comparisons.\n- **Models, software and data:** robot foundation models, tools and the datasets behind them.\n- **Events and timeline:** what's coming up and what happened when.\n\n## How the information is gathered\n\nRecords come from public sources, which are cited on the page, and from members. Facts aren't guessed or estimated. Member edits and posts are reviewed before they appear. The site is a research aid, not investment, purchasing or safety advice: check the original sources. See the [Terms](/terms).\n\n## Take part\n\n- **Sign up** to follow organisations and people, save and like posts, comment, chat and get a watchlist newsletter. Others see you by your username. Your byline is shown only to the people you choose, and your email is never shown. See the [Privacy policy](/privacy).\n- **Claim your page:** if you work at an organisation listed here, verify a work email to keep its page current.\n- **Community:** tell us what you need, and we'll introduce you to a good match if we know one.\n\n## Corrections and contact\n\nSpotted something wrong or missing? Use **Report** on the page or write to {contact_email}. More on the [Contact](/contact) page.\n";
var PRIVACY_MD = "# Privacy policy\n\n*Last updated: {updated}*\n\nThis policy explains what personal data embodiment.place (\"the site\") collects, why, who can see it, how long it is kept and what you can do about it. The site is run by [operator legal name], [postal address] (\"we\", \"us\"). We decide how your data is used (in EU and UK law, we are the \"controller\"). For any privacy question or request, write to **{contact_email}**.\n\n## Short version\n\n- To use the site you need a username, an email address and a password. Your password is stored only as a salted hash.\n- Others know you by your **username**. Your email is never shown to other members: only you and the site admin see it.\n- Your card (name, photo, title, organisation, short bio, social links) is shown only to the people you choose under Account, Overview, Who sees your card. The default is logged-in members only. Visitors who aren't logged in and search engines see your username, not your byline.\n- We keep short access logs (including IP addresses) for {log_days} days to keep the site running and secure.\n- We don't sell personal data, don't share it for advertising, and don't use advertising or tracking cookies.\n- You can download your data or delete your account at any time from Account, Security.\n\n## What we collect\n\n**When you create an account**\n\n- Username (shown publicly next to what you write), email address, and your password stored as a salted scrypt hash. We can't read your password.\n- Account type (member, contributor or admin), the date you joined, and whether your email address is confirmed.\n- If you turn on two-step login: the secret for your authenticator app, the last code used, and your recovery codes stored as hashes.\n\n**What you choose to add**\n\n- **Card:** name, photo, title, organisation, short bio and social links.\n- **For introductions:** location, what you're open to, interests and website. These are never shown on the site. Only the admin, and moderators who review profile changes, see them.\n- **Settings:** profile visibility, newsletter choices, watchlist sections, your walking character's look, and similar preferences.\n- **Content:** posts, comments, chat messages (in the Lounge and in event chats), suggested edits, pages you create or claim, and replies to review.\n- **Activity on the site:** likes, saved items, organisations and people you follow, what you watch, members you block, and reports you send.\n- **Community requests:** what you need, your description, timing, location if you give it, and the contact email you enter.\n- **Claiming an organisation page:** the work email address you verify. We email it a 6-digit code, stored only as a hash and deleted within a day. The verified address is kept with your claim as proof.\n- **Quote requests** (members and visitors): your name, work email, organisation, country, quantity, intended use, timing, message and your consent.\n- **Uploaded images:** checked by type, with camera, date and GPS details removed before they're stored. Images are stored at an address that's hard to guess, but anyone who has that address can open the image.\n\n**Collected automatically**\n\n- **Logins:** for each device you're logged in on, a hashed login token, when the login started and was last used, your IP address and your browser's user agent. You can see and end them under Account, Security.\n- **Access logs:** for each request, the time, IP address (as passed on by Cloudflare), method, page address (including any search terms in it), response status, response time, your account number if you're logged in, and your browser's user agent. Failed logins are logged with the username that was tried. Server errors are logged with the page address.\n- **Abuse limits:** IP addresses and usernames are counted in memory for short periods (minutes to an hour) to limit wrong passwords, sign-ups, emails, uploads and reports. These counts aren't saved.\n- **Walking characters and \"who's here\":** while you're on a page, your username, character look, position and short messages are held in memory and shown to others on the same page. Presence records are cleared after about an hour.\n\nWe don't ask for special categories of data (such as health, religion or political views). Please don't post them.\n\n## Why we use it (legal bases)\n\n- **To provide the site and your account** (performance of a contract): accounts, logins, posts, comments, chat, watchlist, page claims, Community requests and quote requests you ask us to pass on.\n- **To keep the site secure and working** (our legitimate interests): access logs, login records, abuse limits, the human check, moderation, error alerts and backups.\n- **To understand overall use** (our legitimate interests): page statistics without cookies, if switched on.\n- **With your consent:** the watchlist newsletter (off until you turn it on; unsubscribe at any time) and passing a quote request to a company.\n- **To meet legal obligations,** where the law requires us to keep or disclose data.\n\n## Who can see what\n\n- **Everyone, including visitors and search engines:** your username, and your posts, comments and chat messages. Your byline only if you set Profile visibility to Everyone.\n- **Logged-in members:** the above, plus your byline if your Profile visibility is Members (the default) or Everyone.\n- **Only you:** with Profile visibility set to Only me, others see just your username.\n- **Never other members:** your email address, your For introductions fields, your settings, who you follow, what you save or like, and your login history.\n- **The admin** can see all account data in order to run and moderate the site. Contributors the admin trusts with specific tasks (reviewing changes, handling claims or Community requests) see what they need for that task, with email addresses shortened to their domain.\n- **Companies you send a quote request to:** your request and contact details go to that company's verified page managers and to the address it lists for quotes.\n- **Community introductions:** if we find a match for your request, we introduce you by email, which shares your contact email and request with that person or organisation.\n\n## Service providers and other parties\n\n- **Cloudflare, Inc.** carries all traffic to the site (DNS, secure connection, proxy and tunnel) and so processes IP addresses and request data. Its **Turnstile** human check runs on sign-up, login, password reset, member comments and quote requests: your browser talks to Cloudflare, and we send Cloudflare the check's result token and your IP address to confirm it. If page statistics are switched on, we use **Cloudflare Web Analytics**, which sets no cookies. See Cloudflare's privacy policy at cloudflare.com/privacypolicy.\n- **Email delivery:** account emails (email confirmation, password reset, claim codes), the newsletter, and notices to page managers and the admin are sent through [email provider], which processes the recipient's address and the message.\n- **Embedded and linked content:** some posts embed videos (YouTube, in its privacy-enhanced mode) or posts from X, and some pages show images hosted on other sites. When your browser loads them, those sites receive your IP address and browser details under their own policies. We ask browsers not to send them the page you came from.\n- **Address lookups:** when someone types an organisation's address while editing a page, our server looks it up with OpenStreetMap Nominatim or Photon (Komoot). Only the typed address is sent, not your IP address.\n- **Authorities:** we disclose data if the law requires it, or to protect the rights and safety of people or the site.\n\nWe don't sell personal data or share it for cross-context behavioural advertising.\n\nThe site runs on a server in [country]. Cloudflare and other providers may process data in other countries, including the United States. Where EU or UK law applies, those transfers rely on safeguards such as the European Commission's standard contractual clauses or the EU-US Data Privacy Framework.\n\n## Cookies and browser storage\n\n- `hi_sid`: keeps you logged in. HttpOnly, sent only over HTTPS, lasts up to 30 days.\n- `hi_2fa`: used only between your password and your two-step code. It lasts 10 minutes.\n- Cloudflare may set cookies needed for security and for the human check.\n- Your theme, display choices and walking-character position are kept in your browser's storage, not on our server.\n\nAll of these are strictly necessary or are settings you chose. There are no advertising or cross-site tracking cookies, so there is no cookie banner.\n\n## How long we keep data\n\n- **Account and profile:** as long as your account exists.\n- **Logins:** a login ends after 30 days, or after 14 days without use, and its record (IP address and browser) is then deleted.\n- **Access logs:** {log_days} days, then deleted automatically.\n- **One-time links and codes:** password reset links (1 hour), email confirmation links (48 hours) and claim codes (30 minutes) stop working once used or expired, and are then deleted.\n- **Community and quote requests:** kept to handle them and for later reference. Ask us and we'll delete them.\n- **Backups:** the database and uploads are backed up and encrypted before they leave the server. Backups are kept for [backup retention period], so deleted data can stay in a backup until that backup is removed. We would only use a backup to restore the site.\n\n**When you delete your account** (Account, Security, Delete my account), we delete straight away your email, password hash, byline, introductions fields, settings, logins, likes, saved items, follows, watchlist, blocks, page manager roles, Community requests, pending submissions and the reports you sent. A placeholder record (\"Former member\") is kept so that existing pages still work. Your comments, chat messages and posts stay on the site under \"Former member\". Write to {contact_email} if you want them removed. Quote requests you sent to companies, and claim records, are kept unless you ask us to delete them.\n\n## Your rights\n\nDepending on where you live, you can:\n\n- **Access** your data and get a copy you can take elsewhere: Account, Security, Download my data (a JSON file with your account, settings, logins, comments, chat messages, posts, saved items, likes, follows, watchlist, pages you manage, submissions and Community requests). For anything not in that file, write to us.\n- **Correct** it: edit your byline and settings on your account, or write to us.\n- **Delete** it: delete your account yourself, or ask us.\n- **Object to or restrict** some uses, such as uses based on our legitimate interests.\n- **Withdraw consent** at any time, for example by unsubscribing from the newsletter. This doesn't affect what was done before.\n- **Complain** to your data protection authority.\n\nWrite to {contact_email} from the email address on your account, so that we can confirm it's you. We answer within one month. We won't treat you differently for using your rights.\n\n**California residents:** under the CCPA, as amended by the CPRA, you have the right to know what personal information we collect, use and disclose (described above), and to access, correct and delete it. We don't sell or share personal information, and we don't use sensitive personal information beyond what's needed to provide the site. An authorised agent may make a request for you if we can verify both of you.\n\n**EU and UK residents:** the legal bases are listed above, and you can complain to your local supervisory authority.\n\n## Security\n\nConnections are encrypted (HTTPS). Passwords and login tokens are stored only as hashes. Two-step login is available to everyone and required for administrators and contributors. Logins are rate-limited. Access to the server is limited to the operator. No system is perfectly secure: if a breach affects your data, we'll tell you and the authorities where the law requires.\n\nWe will never ask for your password by email.\n\n## Children\n\nThe site is not meant for anyone under 16, and we don't knowingly collect their data. If you think a child under 16 has an account, write to {contact_email} and we'll delete it.\n\n## Changes to this policy\n\nWe'll post changes here and update the date at the top. For important changes, we'll also tell members by email or on the site before they apply.\n\n## Contact\n\n[operator legal name], [postal address]. Email: {contact_email}\n";
var TERMS_MD = "# Terms of use\n\n*Last updated: {updated}*\n\nThese terms are an agreement between you and [operator legal name], [postal address] (\"we\", \"us\"), the operator of embodiment.place (\"the site\"). By using the site you accept these terms and our [Privacy policy](/privacy). If you don't accept them, please don't use the site.\n\n## 1. The site\n\nembodiment.place is an independent research tracker, blog and database about humanoid robotics and embodied AI. It is a personal project and is not affiliated with, endorsed by or sponsored by any company, university, lab or person listed on it, or by any employer of the operator.\n\n## 2. Information accuracy, not advice\n\n- Information on the site comes from public sources and from members. We try to cite sources and correct mistakes, but the information may be incomplete, out of date or wrong.\n- Nothing on the site is investment, financial, legal, purchasing, engineering or safety advice. Check the original source and get professional advice before you rely on anything here.\n- Specifications, prices, funding figures and dates are as reported by the cited sources. We don't verify them independently unless we say so.\n- Company names, product names, logos and trademarks belong to their owners. They are used only to identify those companies and products, and their use doesn't mean any affiliation or endorsement.\n\n## 3. Accounts\n\n- You must be at least 16 years old to create an account.\n- Give a valid email address, keep your password and two-step codes safe, and use one account per person. You are responsible for activity under your account. Tell us straight away at {contact_email} if you think someone else is using it.\n- Your username is public. Don't choose one that impersonates someone else, misleads people about who you are, or infringes someone's rights.\n- Only claim an organisation's page if you are authorised to act for it. We may ask for proof and may remove page manager roles at any time.\n\n## 4. Acceptable use\n\nDon't use the site to:\n\n- break the law, or help someone else break it;\n- post content that is defamatory, harassing, threatening, hateful, sexually explicit, or that invades someone's privacy (including other people's personal data or contact details);\n- post confidential information, trade secrets, or anything you don't have the right to share;\n- infringe copyright, trademarks or other rights;\n- spam, advertise without permission, run scams, or post misleading or false information on purpose;\n- impersonate a person or organisation, or misrepresent your connection with one;\n- upload malware, probe or test the site's security, get around rate limits, the human check or access controls, or access accounts or data that aren't yours;\n- scrape or bulk-download the site in a way that harms it or its members, or collect members' personal data;\n- interfere with the site or other people's use of it.\n\nWe may remove content, limit features, or suspend or close accounts that break these rules, at our discretion and without notice where reasonable.\n\n## 5. Your content\n\n- You keep ownership of what you post (posts, comments, chat messages, images, edits and other submissions).\n- You give us a worldwide, non-exclusive, royalty-free licence to host, store, copy, display, adapt (for example, resize images or format text) and distribute your content on the site, in its newsletters, and in feeds or exports of the site's content, for as long as it's on the site, and afterwards in backups for a limited time. This licence also covers suggested edits to records, which become part of the shared database.\n- You confirm that you have the rights needed to post your content and to give this licence, and that your content follows these terms.\n- Reposts must credit and link to the original source. The site doesn't republish the full text of reposted articles.\n- Members' posts and edits may be reviewed before they appear. We may edit, decline or remove any content but aren't obliged to monitor it. We aren't responsible for content posted by members or third parties, and members' views aren't ours.\n\n## 6. Copyright and takedown (DMCA)\n\nIf you think content on the site infringes your copyright, send a notice to {contact_email} with:\n\n1. your name, address, phone number and email;\n2. a description of the copyrighted work;\n3. the address (URL) of the content on the site;\n4. a statement that you believe in good faith that the use isn't authorised by the owner, its agent or the law;\n5. a statement, under penalty of perjury, that the information in your notice is accurate and that you are the owner or authorised to act for the owner;\n6. your physical or electronic signature.\n\nWe'll remove or disable the content promptly and tell the person who posted it. If you posted the content and think it was removed by mistake, you can send a counter-notice to the same address with your contact details, the content's address, a statement under penalty of perjury that it was removed by mistake or misidentification, your consent to the jurisdiction of the appropriate court, and your signature. We may restore the content as the law allows. We close the accounts of people who repeatedly infringe.\n\nFor other complaints about content (privacy, defamation, abuse), use **Report** on the page or write to {contact_email} with the content's address and the reason.\n\n[Note for the operator: to get the US DMCA safe harbour, register a designated agent with the US Copyright Office and put the agent's name and address here.]\n\n## 7. Quote requests and introductions\n\nWhen you send a quote request, we pass it to the company you chose. Any deal is between you and that company. We aren't a party to it, don't guarantee a reply, and aren't responsible for the company's products, prices or conduct. The same goes for Community introductions: we may introduce you to people or organisations but don't guarantee any outcome.\n\n## 8. Third-party links and content\n\nThe site links to and embeds content from other sites (for example, videos and source articles). We don't control them and aren't responsible for their content, policies or practices.\n\n## 9. No warranty\n\nThe site is provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including warranties of accuracy, fitness for a particular purpose, non-infringement, or uninterrupted or error-free service, to the extent the law allows. We may change, suspend or stop the site, or any part of it, at any time.\n\n## 10. Limitation of liability\n\nTo the extent the law allows, we aren't liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data, goodwill or business opportunity, arising from your use of the site or your reliance on its content. Our total liability for any claim about the site is limited to the greater of USD 50 and the amount you paid us to use the site in the 12 months before the claim (the site is free, so normally USD 50). Some places don't allow these limits, so they may not all apply to you. Nothing in these terms limits liability that can't be limited by law, such as liability for fraud, or for death or personal injury caused by negligence.\n\n## 11. Indemnity\n\nTo the extent the law allows, you agree to defend, indemnify and hold harmless the operator from claims, losses and costs (including reasonable legal fees) that arise from content you post, your use of the site, or your breach of these terms or of someone else's rights.\n\n## 12. Ending\n\nYou can stop using the site and delete your account at any time (Account, Security). We may suspend or close your account, or stop providing the site, at any time, especially if you break these terms. Sections 2, 5 (for content that stays on the site), 6 and 9 to 14 continue to apply after your account ends.\n\n## 13. Changes to these terms\n\nWe may update these terms. We'll post the new version here with a new date and, for important changes, tell members by email or on the site before they apply. If you keep using the site after changes take effect, you accept them. If you don't, please stop using the site and delete your account.\n\n## 14. General\n\n- These terms are governed by the laws of [governing law: state/country], without regard to conflict-of-law rules. Disputes go to the courts of [place], unless the law where you live gives you the right to bring a claim there.\n- If any part of these terms can't be enforced, the rest still applies. If we don't enforce a term, we haven't waived it. You may not transfer your rights under these terms. We may transfer ours to a future operator of the site.\n- These terms and the Privacy policy are the whole agreement between you and us about the site.\n\n## Contact\n\n[operator legal name], [postal address]. Email: {contact_email}\n";
var CONTACT_MD = "# Contact\n\nWrite to **{contact_email}** for everything:\n\n- **General questions, corrections and missing information:** include the page address and, for corrections, a source.\n- **Privacy requests** (access, correction, deletion and other rights): write from the email address on your account so that we can confirm it's you. See the [Privacy policy](/privacy).\n- **Copyright and takedown (DMCA) notices:** include everything listed in section 6 of the [Terms](/terms).\n- **Abuse, harassment or other content problems:** use **Report** on the page, or email us with the page address and the reason.\n- **Organisations:** to manage your page, use **Claim** on it. For anything else, email us.\n- **Press and everything else.**\n\nWe read every message and usually reply within a few working days. Privacy requests are answered within one month.\n\n**We will never ask for your password, two-step codes or recovery codes by email, chat or phone.** If you get a message like that claiming to be from embodiment.place, don't reply. Forward it to {contact_email}.\n\nOperator: [operator legal name], [postal address].\n";
var listViews_default = {
	humanoid: {
		"label": "Humanoid",
		"plural": "Humanoids",
		"facets": [
			"status",
			"locomotion",
			"rel:maker",
			"maker_country",
			"height_cm",
			"dof",
			"payload_kg",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"locomotion",
			"height_cm",
			"dof",
			"payload_kg",
			"price_usd"
		],
		"card_specs": [
			"height_cm",
			"weight_kg",
			"payload_kg",
			"dof",
			"runtime_h"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"locomotion": {
				"label": "Locomotion",
				"kind": "select",
				"unit": ""
			},
			"height_cm": {
				"label": "Height",
				"kind": "number",
				"unit": "cm"
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "DoF (total)",
				"kind": "number",
				"unit": ""
			},
			"payload_kg": {
				"label": "Payload",
				"kind": "number",
				"unit": "kg"
			},
			"speed_mps": {
				"label": "Max speed",
				"kind": "number",
				"unit": "m/s"
			},
			"runtime_h": {
				"label": "Runtime",
				"kind": "number",
				"unit": "h"
			},
			"body_actuator": {
				"label": "Body actuator",
				"kind": "select",
				"unit": ""
			},
			"transmission": {
				"label": "Transmission",
				"kind": "text",
				"unit": ""
			},
			"sensors": {
				"label": "External sensors",
				"kind": "tags",
				"unit": ""
			},
			"ip_rating": {
				"label": "Ingress protection",
				"kind": "text",
				"unit": ""
			},
			"battery": {
				"label": "Battery",
				"kind": "text",
				"unit": ""
			},
			"charging": {
				"label": "Charging",
				"kind": "text",
				"unit": ""
			},
			"onboard_model": {
				"label": "AI model it runs",
				"kind": "text",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "locomotion",
				"label": "Locomotion",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "height_cm",
				"label": "Height",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "DoF (total)",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "speed_mps",
				"label": "Max speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "m/s"
			},
			{
				"key": "runtime_h",
				"label": "Runtime",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "h"
			},
			{
				"key": "body_actuator",
				"label": "Body actuator",
				"kind": "select",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "transmission",
				"label": "Transmission",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "sensors",
				"label": "External sensors",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "battery",
				"label": "Battery",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "charging",
				"label": "Charging",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "onboard_model",
				"label": "AI model it runs",
				"kind": "text",
				"group": "Software",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	quadruped: {
		"label": "Quadruped",
		"plural": "Quadrupeds",
		"facets": [
			"status",
			"q_kind",
			"rel:maker",
			"maker_country",
			"weight_kg",
			"payload_kg",
			"speed_mps",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"q_kind",
			"weight_kg",
			"payload_kg",
			"speed_mps",
			"price_usd"
		],
		"card_specs": [
			"weight_kg",
			"payload_kg",
			"speed_mps",
			"runtime_h",
			"dof"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"q_kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"height_cm": {
				"label": "Height",
				"kind": "number",
				"unit": "cm"
			},
			"length_cm": {
				"label": "Length",
				"kind": "number",
				"unit": "cm"
			},
			"width_cm": {
				"label": "Width",
				"kind": "number",
				"unit": "cm"
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "DoF",
				"kind": "number",
				"unit": ""
			},
			"payload_kg": {
				"label": "Payload",
				"kind": "number",
				"unit": "kg"
			},
			"speed_mps": {
				"label": "Max speed",
				"kind": "number",
				"unit": "m/s"
			},
			"step_cm": {
				"label": "Max step height",
				"kind": "number",
				"unit": "cm"
			},
			"slope_deg": {
				"label": "Max slope",
				"kind": "number",
				"unit": "°"
			},
			"runtime_h": {
				"label": "Runtime",
				"kind": "number",
				"unit": "h"
			},
			"sensors": {
				"label": "External sensors",
				"kind": "tags",
				"unit": ""
			},
			"ip_rating": {
				"label": "Ingress protection",
				"kind": "text",
				"unit": ""
			},
			"battery": {
				"label": "Battery",
				"kind": "text",
				"unit": ""
			},
			"charging": {
				"label": "Charging",
				"kind": "text",
				"unit": ""
			},
			"onboard_model": {
				"label": "AI model it runs",
				"kind": "text",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "q_kind",
				"label": "Kind",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "height_cm",
				"label": "Height",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "length_cm",
				"label": "Length",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "width_cm",
				"label": "Width",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "speed_mps",
				"label": "Max speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "m/s"
			},
			{
				"key": "step_cm",
				"label": "Max step height",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "slope_deg",
				"label": "Max slope",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "°"
			},
			{
				"key": "runtime_h",
				"label": "Runtime",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "h"
			},
			{
				"key": "sensors",
				"label": "External sensors",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "battery",
				"label": "Battery",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "charging",
				"label": "Charging",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "onboard_model",
				"label": "AI model it runs",
				"kind": "text",
				"group": "Software",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	mobile: {
		"label": "Mobile manipulator",
		"plural": "Mobile manipulators",
		"facets": [
			"status",
			"base_kind",
			"rel:maker",
			"maker_country",
			"arms",
			"dof",
			"payload_kg",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"base_kind",
			"arms",
			"dof",
			"payload_kg",
			"price_usd"
		],
		"card_specs": [
			"dof",
			"payload_kg",
			"reach_mm",
			"speed_mps",
			"runtime_h"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"base_kind": {
				"label": "Base",
				"kind": "select",
				"unit": ""
			},
			"arms": {
				"label": "Arms",
				"kind": "number",
				"unit": ""
			},
			"height_cm": {
				"label": "Height",
				"kind": "number",
				"unit": "cm"
			},
			"reach_mm": {
				"label": "Reach",
				"kind": "number",
				"unit": "mm"
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "DoF",
				"kind": "number",
				"unit": ""
			},
			"payload_kg": {
				"label": "Payload",
				"kind": "number",
				"unit": "kg"
			},
			"speed_mps": {
				"label": "Max speed",
				"kind": "number",
				"unit": "m/s"
			},
			"runtime_h": {
				"label": "Runtime",
				"kind": "number",
				"unit": "h"
			},
			"sensors": {
				"label": "External sensors",
				"kind": "tags",
				"unit": ""
			},
			"ip_rating": {
				"label": "Ingress protection",
				"kind": "text",
				"unit": ""
			},
			"battery": {
				"label": "Battery",
				"kind": "text",
				"unit": ""
			},
			"charging": {
				"label": "Charging",
				"kind": "text",
				"unit": ""
			},
			"onboard_model": {
				"label": "AI model it runs",
				"kind": "text",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "base_kind",
				"label": "Base",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "arms",
				"label": "Arms",
				"kind": "number",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "height_cm",
				"label": "Height",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "cm"
			},
			{
				"key": "reach_mm",
				"label": "Reach",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "speed_mps",
				"label": "Max speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "m/s"
			},
			{
				"key": "runtime_h",
				"label": "Runtime",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "h"
			},
			{
				"key": "sensors",
				"label": "External sensors",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "battery",
				"label": "Battery",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "charging",
				"label": "Charging",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "onboard_model",
				"label": "AI model it runs",
				"kind": "text",
				"group": "Software",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	arm: {
		"label": "Arm",
		"plural": "Arms",
		"facets": [
			"status",
			"arm_kind",
			"rel:maker",
			"maker_country",
			"dof",
			"reach_mm",
			"payload_kg",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"arm_kind",
			"dof",
			"reach_mm",
			"payload_kg",
			"price_usd"
		],
		"card_specs": [
			"dof",
			"reach_mm",
			"payload_kg",
			"repeatability_mm",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"arm_kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"reach_mm": {
				"label": "Reach",
				"kind": "number",
				"unit": "mm"
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "DoF",
				"kind": "number",
				"unit": ""
			},
			"payload_kg": {
				"label": "Payload",
				"kind": "number",
				"unit": "kg"
			},
			"repeatability_mm": {
				"label": "Repeatability",
				"kind": "number",
				"unit": "mm"
			},
			"tcp_speed_mps": {
				"label": "Max TCP speed",
				"kind": "number",
				"unit": "m/s"
			},
			"mounting": {
				"label": "Mounting",
				"kind": "text",
				"unit": ""
			},
			"sensors": {
				"label": "External sensors",
				"kind": "tags",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"ip_rating": {
				"label": "Ingress protection",
				"kind": "text",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "arm_kind",
				"label": "Kind",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "reach_mm",
				"label": "Reach",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "repeatability_mm",
				"label": "Repeatability",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "tcp_speed_mps",
				"label": "Max TCP speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "m/s"
			},
			{
				"key": "mounting",
				"label": "Mounting",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "sensors",
				"label": "External sensors",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	hand: {
		"label": "Hand / gripper",
		"plural": "Hands and grippers",
		"facets": [
			"status",
			"h_kind",
			"actuation",
			"tactile",
			"rel:maker",
			"maker_country",
			"dof",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"h_kind",
			"dof",
			"active_dof",
			"tactile",
			"price_usd"
		],
		"card_specs": [
			"dof",
			"active_dof",
			"payload_kg",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"h_kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "DoF",
				"kind": "number",
				"unit": ""
			},
			"active_dof": {
				"label": "Active DoF",
				"kind": "number",
				"unit": ""
			},
			"payload_kg": {
				"label": "Payload",
				"kind": "number",
				"unit": "kg"
			},
			"actuation": {
				"label": "Actuation",
				"kind": "select",
				"unit": ""
			},
			"tactile": {
				"label": "Tactile sensing",
				"kind": "select",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"works_with": { "label": "Works with" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "h_kind",
				"label": "Kind",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "active_dof",
				"label": "Active DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "payload_kg",
				"label": "Payload",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "actuation",
				"label": "Actuation",
				"kind": "select",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "tactile",
				"label": "Tactile sensing",
				"kind": "select",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	teleop: {
		"label": "Teleoperation",
		"plural": "Teleoperation",
		"facets": [
			"status",
			"dc_kind",
			"haptics",
			"rel:maker",
			"maker_country",
			"rel:works_with",
			"dof",
			"latency_ms",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"dc_kind",
			"dof",
			"sample_rate_hz",
			"latency_ms",
			"price_usd"
		],
		"card_specs": [
			"dof",
			"sample_rate_hz",
			"latency_ms",
			"weight_kg",
			"runtime_h"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dc_kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"dof": {
				"label": "Tracked DoF",
				"kind": "number",
				"unit": ""
			},
			"runtime_h": {
				"label": "Runtime",
				"kind": "number",
				"unit": "h"
			},
			"sample_rate_hz": {
				"label": "Sample rate",
				"kind": "number",
				"unit": "Hz"
			},
			"latency_ms": {
				"label": "Latency",
				"kind": "number",
				"unit": "ms"
			},
			"tracking": {
				"label": "Tracking",
				"kind": "text",
				"unit": ""
			},
			"haptics": {
				"label": "Force / haptic feedback",
				"kind": "select",
				"unit": ""
			},
			"streams": {
				"label": "Recorded streams",
				"kind": "tags",
				"unit": ""
			},
			"formats": {
				"label": "Output formats",
				"kind": "tags",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"battery": {
				"label": "Battery",
				"kind": "text",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"works_with": { "label": "Works with" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dc_kind",
				"label": "Kind",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "dof",
				"label": "Tracked DoF",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "runtime_h",
				"label": "Runtime",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "h"
			},
			{
				"key": "sample_rate_hz",
				"label": "Sample rate",
				"kind": "number",
				"group": "Capture",
				"private": false,
				"unit": "Hz"
			},
			{
				"key": "latency_ms",
				"label": "Latency",
				"kind": "number",
				"group": "Capture",
				"private": false,
				"unit": "ms"
			},
			{
				"key": "tracking",
				"label": "Tracking",
				"kind": "text",
				"group": "Capture",
				"private": false,
				"unit": ""
			},
			{
				"key": "haptics",
				"label": "Force / haptic feedback",
				"kind": "select",
				"group": "Capture",
				"private": false,
				"unit": ""
			},
			{
				"key": "streams",
				"label": "Recorded streams",
				"kind": "tags",
				"group": "Capture",
				"private": false,
				"unit": ""
			},
			{
				"key": "formats",
				"label": "Output formats",
				"kind": "tags",
				"group": "Capture",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "battery",
				"label": "Battery",
				"kind": "text",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	actuator: {
		"label": "Actuator",
		"plural": "Actuators",
		"facets": [
			"status",
			"motion",
			"rel:maker",
			"maker_country",
			"peak_torque_nm",
			"weight_kg",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"motion",
			"transmission",
			"peak_torque_nm",
			"weight_kg",
			"price_usd"
		],
		"card_specs": [
			"peak_torque_nm",
			"rated_torque_nm",
			"peak_force_n",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"motion": {
				"label": "Motion",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"peak_torque_nm": {
				"label": "Peak torque",
				"kind": "number",
				"unit": "Nm"
			},
			"rated_torque_nm": {
				"label": "Rated torque",
				"kind": "number",
				"unit": "Nm"
			},
			"rated_speed_rpm": {
				"label": "Rated speed",
				"kind": "number",
				"unit": "rpm"
			},
			"ratio": {
				"label": "Gear ratio",
				"kind": "text",
				"unit": ""
			},
			"backlash_arcmin": {
				"label": "Backlash",
				"kind": "number",
				"unit": "arcmin"
			},
			"diameter_mm": {
				"label": "Outer diameter",
				"kind": "number",
				"unit": "mm"
			},
			"voltage_v": {
				"label": "Voltage",
				"kind": "number",
				"unit": "V"
			},
			"peak_force_n": {
				"label": "Peak force (linear)",
				"kind": "number",
				"unit": "N"
			},
			"transmission": {
				"label": "Transmission",
				"kind": "text",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "motion",
				"label": "Motion",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "peak_torque_nm",
				"label": "Peak torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "rated_torque_nm",
				"label": "Rated torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "rated_speed_rpm",
				"label": "Rated speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "rpm"
			},
			{
				"key": "ratio",
				"label": "Gear ratio",
				"kind": "text",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "backlash_arcmin",
				"label": "Backlash",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "arcmin"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "voltage_v",
				"label": "Voltage",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "V"
			},
			{
				"key": "peak_force_n",
				"label": "Peak force (linear)",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "N"
			},
			{
				"key": "transmission",
				"label": "Transmission",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	motor: {
		"label": "Motor",
		"plural": "Motors",
		"facets": [
			"status",
			"motor_kind",
			"rel:maker",
			"maker_country",
			"rated_torque_nm",
			"diameter_mm",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"motor_kind",
			"rated_torque_nm",
			"rated_speed_rpm",
			"diameter_mm",
			"price_usd"
		],
		"card_specs": [
			"rated_torque_nm",
			"peak_torque_nm",
			"rated_speed_rpm",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"motor_kind": {
				"label": "Motor type",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"peak_torque_nm": {
				"label": "Peak torque",
				"kind": "number",
				"unit": "Nm"
			},
			"rated_torque_nm": {
				"label": "Rated torque",
				"kind": "number",
				"unit": "Nm"
			},
			"rated_speed_rpm": {
				"label": "Rated speed",
				"kind": "number",
				"unit": "rpm"
			},
			"diameter_mm": {
				"label": "Outer diameter",
				"kind": "number",
				"unit": "mm"
			},
			"voltage_v": {
				"label": "Voltage",
				"kind": "number",
				"unit": "V"
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "motor_kind",
				"label": "Motor type",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "peak_torque_nm",
				"label": "Peak torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "rated_torque_nm",
				"label": "Rated torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "rated_speed_rpm",
				"label": "Rated speed",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "rpm"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "voltage_v",
				"label": "Voltage",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "V"
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	gearbox: {
		"label": "Gearbox / reducer",
		"plural": "Gearboxes and reducers",
		"facets": [
			"status",
			"gear_kind",
			"rel:maker",
			"maker_country",
			"rated_torque_nm",
			"backlash_arcmin",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"gear_kind",
			"ratio",
			"rated_torque_nm",
			"backlash_arcmin",
			"price_usd"
		],
		"card_specs": [
			"ratio",
			"rated_torque_nm",
			"backlash_arcmin",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"gear_kind": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"peak_torque_nm": {
				"label": "Peak torque",
				"kind": "number",
				"unit": "Nm"
			},
			"rated_torque_nm": {
				"label": "Rated torque",
				"kind": "number",
				"unit": "Nm"
			},
			"ratio": {
				"label": "Gear ratio",
				"kind": "text",
				"unit": ""
			},
			"backlash_arcmin": {
				"label": "Backlash",
				"kind": "number",
				"unit": "arcmin"
			},
			"diameter_mm": {
				"label": "Outer diameter",
				"kind": "number",
				"unit": "mm"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "gear_kind",
				"label": "Type",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "peak_torque_nm",
				"label": "Peak torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "rated_torque_nm",
				"label": "Rated torque",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "ratio",
				"label": "Gear ratio",
				"kind": "text",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "backlash_arcmin",
				"label": "Backlash",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "arcmin"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	encoder: {
		"label": "Encoder",
		"plural": "Encoders",
		"facets": [
			"status",
			"enc_kind",
			"enc_absolute",
			"rel:maker",
			"maker_country",
			"resolution_bits",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"enc_kind",
			"resolution_bits",
			"enc_absolute",
			"price_usd"
		],
		"card_specs": [
			"resolution_bits",
			"enc_absolute",
			"diameter_mm"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"enc_kind": {
				"label": "Encoder type",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"diameter_mm": {
				"label": "Outer diameter",
				"kind": "number",
				"unit": "mm"
			},
			"resolution_bits": {
				"label": "Resolution",
				"kind": "number",
				"unit": "bit"
			},
			"enc_absolute": {
				"label": "Absolute",
				"kind": "select",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "enc_kind",
				"label": "Encoder type",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "resolution_bits",
				"label": "Resolution",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "bit"
			},
			{
				"key": "enc_absolute",
				"label": "Absolute",
				"kind": "select",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	driver: {
		"label": "Motor driver",
		"plural": "Motor drivers",
		"facets": [
			"status",
			"interface",
			"rel:maker",
			"maker_country",
			"voltage_v",
			"current_cont_a",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"voltage_v",
			"current_cont_a",
			"current_peak_a",
			"interface",
			"price_usd"
		],
		"card_specs": [
			"voltage_v",
			"current_cont_a",
			"current_peak_a",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"current_cont_a": {
				"label": "Continuous current",
				"kind": "number",
				"unit": "A"
			},
			"current_peak_a": {
				"label": "Peak current",
				"kind": "number",
				"unit": "A"
			},
			"voltage_v": {
				"label": "Voltage",
				"kind": "number",
				"unit": "V"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "current_cont_a",
				"label": "Continuous current",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "A"
			},
			{
				"key": "current_peak_a",
				"label": "Peak current",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "A"
			},
			{
				"key": "voltage_v",
				"label": "Voltage",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "V"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	bearing: {
		"label": "Bearing / screw",
		"plural": "Bearings and screws",
		"facets": [
			"status",
			"bearing_kind",
			"rel:maker",
			"maker_country",
			"diameter_mm",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"bearing_kind",
			"diameter_mm",
			"price_usd"
		],
		"card_specs": [
			"bearing_kind",
			"diameter_mm",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"bearing_kind": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"diameter_mm": {
				"label": "Outer diameter",
				"kind": "number",
				"unit": "mm"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "bearing_kind",
				"label": "Type",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "diameter_mm",
				"label": "Outer diameter",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	camera: {
		"label": "Camera",
		"plural": "Cameras",
		"facets": [
			"status",
			"cam_kind",
			"shutter",
			"rel:maker",
			"maker_country",
			"fps",
			"depth_max_m",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"cam_kind",
			"resolution_mp",
			"fps",
			"fov_h_deg",
			"depth_max_m",
			"price_usd"
		],
		"card_specs": [
			"resolution_mp",
			"fps",
			"fov_h_deg",
			"depth_max_m",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"cam_kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"resolution_mp": {
				"label": "Resolution",
				"kind": "number",
				"unit": "MP"
			},
			"fps": {
				"label": "Frame rate",
				"kind": "number",
				"unit": "fps"
			},
			"fov_h_deg": {
				"label": "Horizontal FoV",
				"kind": "number",
				"unit": "°"
			},
			"fov_v_deg": {
				"label": "Vertical FoV",
				"kind": "number",
				"unit": "°"
			},
			"depth_min_m": {
				"label": "Min depth",
				"kind": "number",
				"unit": "m"
			},
			"depth_max_m": {
				"label": "Max depth",
				"kind": "number",
				"unit": "m"
			},
			"shutter": {
				"label": "Shutter",
				"kind": "select",
				"unit": ""
			},
			"imu": {
				"label": "Built-in IMU",
				"kind": "select",
				"unit": ""
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"ip_rating": {
				"label": "Ingress protection",
				"kind": "text",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"works_with": { "label": "Works with" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "cam_kind",
				"label": "Kind",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "resolution_mp",
				"label": "Resolution",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "MP"
			},
			{
				"key": "fps",
				"label": "Frame rate",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "fps"
			},
			{
				"key": "fov_h_deg",
				"label": "Horizontal FoV",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "°"
			},
			{
				"key": "fov_v_deg",
				"label": "Vertical FoV",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "°"
			},
			{
				"key": "depth_min_m",
				"label": "Min depth",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "m"
			},
			{
				"key": "depth_max_m",
				"label": "Max depth",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "m"
			},
			{
				"key": "shutter",
				"label": "Shutter",
				"kind": "select",
				"group": "Imaging",
				"private": false,
				"unit": ""
			},
			{
				"key": "imu",
				"label": "Built-in IMU",
				"kind": "select",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "ip_rating",
				"label": "Ingress protection",
				"kind": "text",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	lidar: {
		"label": "LiDAR",
		"plural": "LiDARs",
		"facets": [
			"status",
			"lidar_kind",
			"rel:maker",
			"maker_country",
			"channels",
			"range_m",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"lidar_kind",
			"channels",
			"range_m",
			"fov_h_deg",
			"price_usd"
		],
		"card_specs": [
			"channels",
			"range_m",
			"fov_h_deg",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"lidar_kind": {
				"label": "LiDAR type",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"channels": {
				"label": "Channels",
				"kind": "number",
				"unit": ""
			},
			"range_m": {
				"label": "Range",
				"kind": "number",
				"unit": "m"
			},
			"points_per_s": {
				"label": "Points per second",
				"kind": "number",
				"unit": ""
			},
			"fov_h_deg": {
				"label": "Horizontal FoV",
				"kind": "number",
				"unit": "°"
			},
			"fov_v_deg": {
				"label": "Vertical FoV",
				"kind": "number",
				"unit": "°"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "lidar_kind",
				"label": "LiDAR type",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "channels",
				"label": "Channels",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "range_m",
				"label": "Range",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "m"
			},
			{
				"key": "points_per_s",
				"label": "Points per second",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "fov_h_deg",
				"label": "Horizontal FoV",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "°"
			},
			{
				"key": "fov_v_deg",
				"label": "Vertical FoV",
				"kind": "number",
				"group": "Imaging",
				"private": false,
				"unit": "°"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	ft_sensor: {
		"label": "Force / torque sensor",
		"plural": "Force / torque sensors",
		"facets": [
			"status",
			"ft_axes",
			"rel:maker",
			"maker_country",
			"force_range_n",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"ft_axes",
			"force_range_n",
			"torque_range_nm",
			"price_usd"
		],
		"card_specs": [
			"ft_axes",
			"force_range_n",
			"torque_range_nm",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"ft_axes": {
				"label": "Axes",
				"kind": "select",
				"unit": ""
			},
			"force_range_n": {
				"label": "Force range",
				"kind": "number",
				"unit": "N"
			},
			"torque_range_nm": {
				"label": "Torque range",
				"kind": "number",
				"unit": "Nm"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "ft_axes",
				"label": "Axes",
				"kind": "select",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "force_range_n",
				"label": "Force range",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "N"
			},
			{
				"key": "torque_range_nm",
				"label": "Torque range",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Nm"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	imu: {
		"label": "IMU",
		"plural": "IMUs",
		"facets": [
			"status",
			"imu_axes",
			"rel:maker",
			"maker_country",
			"output_hz",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"imu_axes",
			"output_hz",
			"interface",
			"price_usd"
		],
		"card_specs": [
			"imu_axes",
			"output_hz",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"imu_axes": {
				"label": "Axes",
				"kind": "select",
				"unit": ""
			},
			"output_hz": {
				"label": "Output rate",
				"kind": "number",
				"unit": "Hz"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "imu_axes",
				"label": "Axes",
				"kind": "select",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "output_hz",
				"label": "Output rate",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "Hz"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	tactile: {
		"label": "Tactile sensor",
		"plural": "Tactile sensors",
		"facets": [
			"status",
			"tactile_kind",
			"rel:maker",
			"maker_country",
			"taxels",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"tactile_kind",
			"taxels",
			"spatial_res_mm",
			"price_usd"
		],
		"card_specs": [
			"taxels",
			"spatial_res_mm",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"tactile_kind": {
				"label": "Sensing method",
				"kind": "select",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"taxels": {
				"label": "Sensing points",
				"kind": "number",
				"unit": ""
			},
			"spatial_res_mm": {
				"label": "Spatial resolution",
				"kind": "number",
				"unit": "mm"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "tactile_kind",
				"label": "Sensing method",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "taxels",
				"label": "Sensing points",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "spatial_res_mm",
				"label": "Spatial resolution",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "mm"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	compute: {
		"label": "Compute",
		"plural": "Compute modules",
		"facets": [
			"status",
			"rel:maker",
			"maker_country",
			"tops",
			"memory_gb",
			"power_w",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"tops",
			"memory_gb",
			"power_w",
			"gpu",
			"price_usd"
		],
		"card_specs": [
			"tops",
			"memory_gb",
			"power_w",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"tops": {
				"label": "AI performance",
				"kind": "number",
				"unit": "TOPS"
			},
			"cpu": {
				"label": "CPU",
				"kind": "text",
				"unit": ""
			},
			"gpu": {
				"label": "GPU",
				"kind": "text",
				"unit": ""
			},
			"memory_gb": {
				"label": "Memory",
				"kind": "number",
				"unit": "GB"
			},
			"interface": {
				"label": "Interfaces",
				"kind": "tags",
				"unit": ""
			},
			"power_w": {
				"label": "Power",
				"kind": "number",
				"unit": "W"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "tops",
				"label": "AI performance",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "TOPS"
			},
			{
				"key": "cpu",
				"label": "CPU",
				"kind": "text",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "gpu",
				"label": "GPU",
				"kind": "text",
				"group": "Performance",
				"private": false,
				"unit": ""
			},
			{
				"key": "memory_gb",
				"label": "Memory",
				"kind": "number",
				"group": "Performance",
				"private": false,
				"unit": "GB"
			},
			{
				"key": "interface",
				"label": "Interfaces",
				"kind": "tags",
				"group": "Hardware",
				"private": false,
				"unit": ""
			},
			{
				"key": "power_w",
				"label": "Power",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "W"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	battery: {
		"label": "Battery",
		"plural": "Batteries",
		"facets": [
			"status",
			"chemistry",
			"rel:maker",
			"maker_country",
			"capacity_wh",
			"voltage_v",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"chemistry",
			"capacity_wh",
			"voltage_v",
			"cycles",
			"price_usd"
		],
		"card_specs": [
			"capacity_wh",
			"voltage_v",
			"chemistry",
			"weight_kg"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"dimensions": {
				"label": "Dimensions",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"voltage_v": {
				"label": "Voltage",
				"kind": "number",
				"unit": "V"
			},
			"capacity_wh": {
				"label": "Capacity",
				"kind": "number",
				"unit": "Wh"
			},
			"chemistry": {
				"label": "Chemistry",
				"kind": "select",
				"unit": ""
			},
			"cycles": {
				"label": "Cycle life",
				"kind": "number",
				"unit": ""
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "dimensions",
				"label": "Dimensions",
				"kind": "text",
				"group": "Dimensions",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "voltage_v",
				"label": "Voltage",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "V"
			},
			{
				"key": "capacity_wh",
				"label": "Capacity",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": "Wh"
			},
			{
				"key": "chemistry",
				"label": "Chemistry",
				"kind": "select",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "cycles",
				"label": "Cycle life",
				"kind": "number",
				"group": "Power",
				"private": false,
				"unit": ""
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	material: {
		"label": "Material",
		"plural": "Materials",
		"facets": [
			"status",
			"mat_kind",
			"origin",
			"rel:maker",
			"maker_country",
			"price_usd"
		],
		"columns": [
			"rel:maker",
			"maker_country",
			"status",
			"mat_kind",
			"grade",
			"origin",
			"price_usd"
		],
		"card_specs": [
			"mat_kind",
			"grade",
			"origin"
		],
		"date_field": "announced",
		"fmap": {
			"category": {
				"label": "Type",
				"kind": "select",
				"unit": ""
			},
			"for_sale": {
				"label": "For sale on the site",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"announced": {
				"label": "Announced",
				"kind": "date",
				"unit": ""
			},
			"mat_kind": {
				"label": "Material",
				"kind": "select",
				"unit": ""
			},
			"grade": {
				"label": "Grade",
				"kind": "text",
				"unit": ""
			},
			"origin": {
				"label": "Produced in",
				"kind": "text",
				"unit": ""
			},
			"weight_kg": {
				"label": "Weight",
				"kind": "number",
				"unit": "kg"
			},
			"price_usd": {
				"label": "Price",
				"kind": "number",
				"unit": "USD"
			},
			"targets": {
				"label": "Target sectors",
				"kind": "multi",
				"unit": ""
			},
			"shipments": {
				"label": "Units shipped (latest year)",
				"kind": "number",
				"unit": ""
			},
			"shipments_year": {
				"label": "Shipments year",
				"kind": "year",
				"unit": ""
			},
			"availability": {
				"label": "Availability",
				"kind": "select",
				"unit": ""
			},
			"lead_time": {
				"label": "Lead time",
				"kind": "text",
				"unit": ""
			},
			"regions": {
				"label": "Sold in",
				"kind": "tags",
				"unit": ""
			},
			"certs": {
				"label": "Certification",
				"kind": "certs",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			},
			"gallery": {
				"label": "Gallery",
				"kind": "gallery",
				"unit": ""
			},
			"video": {
				"label": "Official video",
				"kind": "url",
				"unit": ""
			},
			"versions": {
				"label": "Versions",
				"kind": "versions",
				"unit": ""
			},
			"options": {
				"label": "Configurations",
				"kind": "options",
				"unit": ""
			},
			"quote_email": {
				"label": "Send quote requests to",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"maker": { "label": "Maker" },
			"uses": { "label": "Parts and models" },
			"suppliers": { "label": "Suppliers" }
		},
		"fields": [
			{
				"key": "category",
				"label": "Type",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "for_sale",
				"label": "For sale on the site",
				"kind": "select",
				"group": "Basics",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "announced",
				"label": "Announced",
				"kind": "date",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "mat_kind",
				"label": "Material",
				"kind": "select",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "grade",
				"label": "Grade",
				"kind": "text",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "origin",
				"label": "Produced in",
				"kind": "text",
				"group": "General",
				"private": false,
				"unit": ""
			},
			{
				"key": "weight_kg",
				"label": "Weight",
				"kind": "number",
				"group": "Dimensions",
				"private": false,
				"unit": "kg"
			},
			{
				"key": "price_usd",
				"label": "Price",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": "USD"
			},
			{
				"key": "targets",
				"label": "Target sectors",
				"kind": "multi",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments",
				"label": "Units shipped (latest year)",
				"kind": "number",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "shipments_year",
				"label": "Shipments year",
				"kind": "year",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "availability",
				"label": "Availability",
				"kind": "select",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "lead_time",
				"label": "Lead time",
				"kind": "text",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "regions",
				"label": "Sold in",
				"kind": "tags",
				"group": "Commercial",
				"private": false,
				"unit": ""
			},
			{
				"key": "certs",
				"label": "Certification",
				"kind": "certs",
				"group": "Certification",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "gallery",
				"label": "Gallery",
				"kind": "gallery",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "video",
				"label": "Official video",
				"kind": "url",
				"group": "image",
				"private": false,
				"unit": ""
			},
			{
				"key": "versions",
				"label": "Versions",
				"kind": "versions",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "options",
				"label": "Configurations",
				"kind": "options",
				"group": "models",
				"private": false,
				"unit": ""
			},
			{
				"key": "quote_email",
				"label": "Send quote requests to",
				"kind": "text",
				"group": "ordering",
				"private": false,
				"unit": ""
			}
		]
	},
	misc: /* @__PURE__ */ JSON.parse("{\"label\":\"Misc\",\"plural\":\"Misc\",\"facets\":[\"status\",\"rel:maker\",\"maker_country\",\"weight_kg\",\"price_usd\"],\"columns\":[\"rel:maker\",\"maker_country\",\"status\",\"misc_kind\",\"weight_kg\",\"price_usd\"],\"card_specs\":[\"weight_kg\",\"power_w\"],\"date_field\":\"announced\",\"fmap\":{\"category\":{\"label\":\"Type\",\"kind\":\"select\",\"unit\":\"\"},\"for_sale\":{\"label\":\"For sale on the site\",\"kind\":\"select\",\"unit\":\"\"},\"status\":{\"label\":\"Status\",\"kind\":\"select\",\"unit\":\"\"},\"announced\":{\"label\":\"Announced\",\"kind\":\"date\",\"unit\":\"\"},\"locomotion\":{\"label\":\"Locomotion\",\"kind\":\"select\",\"unit\":\"\"},\"q_kind\":{\"label\":\"Kind\",\"kind\":\"select\",\"unit\":\"\"},\"arm_kind\":{\"label\":\"Kind\",\"kind\":\"select\",\"unit\":\"\"},\"base_kind\":{\"label\":\"Base\",\"kind\":\"select\",\"unit\":\"\"},\"arms\":{\"label\":\"Arms\",\"kind\":\"number\",\"unit\":\"\"},\"h_kind\":{\"label\":\"Kind\",\"kind\":\"select\",\"unit\":\"\"},\"motion\":{\"label\":\"Motion\",\"kind\":\"select\",\"unit\":\"\"},\"cam_kind\":{\"label\":\"Kind\",\"kind\":\"select\",\"unit\":\"\"},\"dc_kind\":{\"label\":\"Kind\",\"kind\":\"select\",\"unit\":\"\"},\"misc_kind\":{\"label\":\"What it is\",\"kind\":\"text\",\"unit\":\"\"},\"motor_kind\":{\"label\":\"Motor type\",\"kind\":\"select\",\"unit\":\"\"},\"gear_kind\":{\"label\":\"Type\",\"kind\":\"select\",\"unit\":\"\"},\"enc_kind\":{\"label\":\"Encoder type\",\"kind\":\"select\",\"unit\":\"\"},\"bearing_kind\":{\"label\":\"Type\",\"kind\":\"select\",\"unit\":\"\"},\"lidar_kind\":{\"label\":\"LiDAR type\",\"kind\":\"select\",\"unit\":\"\"},\"tactile_kind\":{\"label\":\"Sensing method\",\"kind\":\"select\",\"unit\":\"\"},\"mat_kind\":{\"label\":\"Material\",\"kind\":\"select\",\"unit\":\"\"},\"grade\":{\"label\":\"Grade\",\"kind\":\"text\",\"unit\":\"\"},\"origin\":{\"label\":\"Produced in\",\"kind\":\"text\",\"unit\":\"\"},\"height_cm\":{\"label\":\"Height\",\"kind\":\"number\",\"unit\":\"cm\"},\"length_cm\":{\"label\":\"Length\",\"kind\":\"number\",\"unit\":\"cm\"},\"width_cm\":{\"label\":\"Width\",\"kind\":\"number\",\"unit\":\"cm\"},\"reach_mm\":{\"label\":\"Reach\",\"kind\":\"number\",\"unit\":\"mm\"},\"dimensions\":{\"label\":\"Dimensions\",\"kind\":\"text\",\"unit\":\"\"},\"weight_kg\":{\"label\":\"Weight\",\"kind\":\"number\",\"unit\":\"kg\"},\"dof\":{\"label\":\"DoF\",\"kind\":\"number\",\"unit\":\"\"},\"active_dof\":{\"label\":\"Active DoF\",\"kind\":\"number\",\"unit\":\"\"},\"payload_kg\":{\"label\":\"Payload\",\"kind\":\"number\",\"unit\":\"kg\"},\"repeatability_mm\":{\"label\":\"Repeatability\",\"kind\":\"number\",\"unit\":\"mm\"},\"tcp_speed_mps\":{\"label\":\"Max TCP speed\",\"kind\":\"number\",\"unit\":\"m/s\"},\"speed_mps\":{\"label\":\"Max speed\",\"kind\":\"number\",\"unit\":\"m/s\"},\"step_cm\":{\"label\":\"Max step height\",\"kind\":\"number\",\"unit\":\"cm\"},\"slope_deg\":{\"label\":\"Max slope\",\"kind\":\"number\",\"unit\":\"°\"},\"peak_torque_nm\":{\"label\":\"Peak torque\",\"kind\":\"number\",\"unit\":\"Nm\"},\"rated_torque_nm\":{\"label\":\"Rated torque\",\"kind\":\"number\",\"unit\":\"Nm\"},\"rated_speed_rpm\":{\"label\":\"Rated speed\",\"kind\":\"number\",\"unit\":\"rpm\"},\"ratio\":{\"label\":\"Gear ratio\",\"kind\":\"text\",\"unit\":\"\"},\"backlash_arcmin\":{\"label\":\"Backlash\",\"kind\":\"number\",\"unit\":\"arcmin\"},\"diameter_mm\":{\"label\":\"Outer diameter\",\"kind\":\"number\",\"unit\":\"mm\"},\"resolution_bits\":{\"label\":\"Resolution\",\"kind\":\"number\",\"unit\":\"bit\"},\"enc_absolute\":{\"label\":\"Absolute\",\"kind\":\"select\",\"unit\":\"\"},\"current_cont_a\":{\"label\":\"Continuous current\",\"kind\":\"number\",\"unit\":\"A\"},\"current_peak_a\":{\"label\":\"Peak current\",\"kind\":\"number\",\"unit\":\"A\"},\"voltage_v\":{\"label\":\"Voltage\",\"kind\":\"number\",\"unit\":\"V\"},\"channels\":{\"label\":\"Channels\",\"kind\":\"number\",\"unit\":\"\"},\"range_m\":{\"label\":\"Range\",\"kind\":\"number\",\"unit\":\"m\"},\"points_per_s\":{\"label\":\"Points per second\",\"kind\":\"number\",\"unit\":\"\"},\"ft_axes\":{\"label\":\"Axes\",\"kind\":\"select\",\"unit\":\"\"},\"force_range_n\":{\"label\":\"Force range\",\"kind\":\"number\",\"unit\":\"N\"},\"torque_range_nm\":{\"label\":\"Torque range\",\"kind\":\"number\",\"unit\":\"Nm\"},\"imu_axes\":{\"label\":\"Axes\",\"kind\":\"select\",\"unit\":\"\"},\"output_hz\":{\"label\":\"Output rate\",\"kind\":\"number\",\"unit\":\"Hz\"},\"taxels\":{\"label\":\"Sensing points\",\"kind\":\"number\",\"unit\":\"\"},\"spatial_res_mm\":{\"label\":\"Spatial resolution\",\"kind\":\"number\",\"unit\":\"mm\"},\"tops\":{\"label\":\"AI performance\",\"kind\":\"number\",\"unit\":\"TOPS\"},\"cpu\":{\"label\":\"CPU\",\"kind\":\"text\",\"unit\":\"\"},\"gpu\":{\"label\":\"GPU\",\"kind\":\"text\",\"unit\":\"\"},\"memory_gb\":{\"label\":\"Memory\",\"kind\":\"number\",\"unit\":\"GB\"},\"capacity_wh\":{\"label\":\"Capacity\",\"kind\":\"number\",\"unit\":\"Wh\"},\"chemistry\":{\"label\":\"Chemistry\",\"kind\":\"select\",\"unit\":\"\"},\"cycles\":{\"label\":\"Cycle life\",\"kind\":\"number\",\"unit\":\"\"},\"peak_force_n\":{\"label\":\"Peak force (linear)\",\"kind\":\"number\",\"unit\":\"N\"},\"runtime_h\":{\"label\":\"Runtime\",\"kind\":\"number\",\"unit\":\"h\"},\"resolution_mp\":{\"label\":\"Resolution\",\"kind\":\"number\",\"unit\":\"MP\"},\"fps\":{\"label\":\"Frame rate\",\"kind\":\"number\",\"unit\":\"fps\"},\"fov_h_deg\":{\"label\":\"Horizontal FoV\",\"kind\":\"number\",\"unit\":\"°\"},\"fov_v_deg\":{\"label\":\"Vertical FoV\",\"kind\":\"number\",\"unit\":\"°\"},\"depth_min_m\":{\"label\":\"Min depth\",\"kind\":\"number\",\"unit\":\"m\"},\"depth_max_m\":{\"label\":\"Max depth\",\"kind\":\"number\",\"unit\":\"m\"},\"shutter\":{\"label\":\"Shutter\",\"kind\":\"select\",\"unit\":\"\"},\"sample_rate_hz\":{\"label\":\"Sample rate\",\"kind\":\"number\",\"unit\":\"Hz\"},\"latency_ms\":{\"label\":\"Latency\",\"kind\":\"number\",\"unit\":\"ms\"},\"tracking\":{\"label\":\"Tracking\",\"kind\":\"text\",\"unit\":\"\"},\"haptics\":{\"label\":\"Force / haptic feedback\",\"kind\":\"select\",\"unit\":\"\"},\"streams\":{\"label\":\"Recorded streams\",\"kind\":\"tags\",\"unit\":\"\"},\"formats\":{\"label\":\"Output formats\",\"kind\":\"tags\",\"unit\":\"\"},\"actuation\":{\"label\":\"Actuation\",\"kind\":\"select\",\"unit\":\"\"},\"tactile\":{\"label\":\"Tactile sensing\",\"kind\":\"select\",\"unit\":\"\"},\"body_actuator\":{\"label\":\"Body actuator\",\"kind\":\"select\",\"unit\":\"\"},\"transmission\":{\"label\":\"Transmission\",\"kind\":\"text\",\"unit\":\"\"},\"mounting\":{\"label\":\"Mounting\",\"kind\":\"text\",\"unit\":\"\"},\"sensors\":{\"label\":\"External sensors\",\"kind\":\"tags\",\"unit\":\"\"},\"imu\":{\"label\":\"Built-in IMU\",\"kind\":\"select\",\"unit\":\"\"},\"interface\":{\"label\":\"Interfaces\",\"kind\":\"tags\",\"unit\":\"\"},\"ip_rating\":{\"label\":\"Ingress protection\",\"kind\":\"text\",\"unit\":\"\"},\"battery\":{\"label\":\"Battery\",\"kind\":\"text\",\"unit\":\"\"},\"charging\":{\"label\":\"Charging\",\"kind\":\"text\",\"unit\":\"\"},\"power_w\":{\"label\":\"Power\",\"kind\":\"number\",\"unit\":\"W\"},\"onboard_model\":{\"label\":\"AI model it runs\",\"kind\":\"text\",\"unit\":\"\"},\"price_usd\":{\"label\":\"Price\",\"kind\":\"number\",\"unit\":\"USD\"},\"targets\":{\"label\":\"Target sectors\",\"kind\":\"multi\",\"unit\":\"\"},\"shipments\":{\"label\":\"Units shipped (latest year)\",\"kind\":\"number\",\"unit\":\"\"},\"shipments_year\":{\"label\":\"Shipments year\",\"kind\":\"year\",\"unit\":\"\"},\"availability\":{\"label\":\"Availability\",\"kind\":\"select\",\"unit\":\"\"},\"lead_time\":{\"label\":\"Lead time\",\"kind\":\"text\",\"unit\":\"\"},\"regions\":{\"label\":\"Sold in\",\"kind\":\"tags\",\"unit\":\"\"},\"certs\":{\"label\":\"Certification\",\"kind\":\"certs\",\"unit\":\"\"},\"image\":{\"label\":\"Image\",\"kind\":\"image\",\"unit\":\"\"},\"gallery\":{\"label\":\"Gallery\",\"kind\":\"gallery\",\"unit\":\"\"},\"video\":{\"label\":\"Official video\",\"kind\":\"url\",\"unit\":\"\"},\"versions\":{\"label\":\"Versions\",\"kind\":\"versions\",\"unit\":\"\"},\"options\":{\"label\":\"Configurations\",\"kind\":\"options\",\"unit\":\"\"},\"quote_email\":{\"label\":\"Send quote requests to\",\"kind\":\"text\",\"unit\":\"\"}},\"rmap\":{\"maker\":{\"label\":\"Maker\"},\"uses\":{\"label\":\"Parts and models\"},\"works_with\":{\"label\":\"Works with\"},\"suppliers\":{\"label\":\"Suppliers\"}},\"fields\":[{\"key\":\"category\",\"label\":\"Type\",\"kind\":\"select\",\"group\":\"Basics\",\"private\":false,\"unit\":\"\"},{\"key\":\"for_sale\",\"label\":\"For sale on the site\",\"kind\":\"select\",\"group\":\"Basics\",\"private\":false,\"unit\":\"\"},{\"key\":\"status\",\"label\":\"Status\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"announced\",\"label\":\"Announced\",\"kind\":\"date\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"locomotion\",\"label\":\"Locomotion\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"q_kind\",\"label\":\"Kind\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"arm_kind\",\"label\":\"Kind\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"base_kind\",\"label\":\"Base\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"arms\",\"label\":\"Arms\",\"kind\":\"number\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"h_kind\",\"label\":\"Kind\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"motion\",\"label\":\"Motion\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"cam_kind\",\"label\":\"Kind\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"dc_kind\",\"label\":\"Kind\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"misc_kind\",\"label\":\"What it is\",\"kind\":\"text\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"motor_kind\",\"label\":\"Motor type\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"gear_kind\",\"label\":\"Type\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"enc_kind\",\"label\":\"Encoder type\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"bearing_kind\",\"label\":\"Type\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"lidar_kind\",\"label\":\"LiDAR type\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"tactile_kind\",\"label\":\"Sensing method\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"mat_kind\",\"label\":\"Material\",\"kind\":\"select\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"grade\",\"label\":\"Grade\",\"kind\":\"text\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"origin\",\"label\":\"Produced in\",\"kind\":\"text\",\"group\":\"General\",\"private\":false,\"unit\":\"\"},{\"key\":\"height_cm\",\"label\":\"Height\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"cm\"},{\"key\":\"length_cm\",\"label\":\"Length\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"cm\"},{\"key\":\"width_cm\",\"label\":\"Width\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"cm\"},{\"key\":\"reach_mm\",\"label\":\"Reach\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"mm\"},{\"key\":\"dimensions\",\"label\":\"Dimensions\",\"kind\":\"text\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"\"},{\"key\":\"weight_kg\",\"label\":\"Weight\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"kg\"},{\"key\":\"dof\",\"label\":\"DoF\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"active_dof\",\"label\":\"Active DoF\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"payload_kg\",\"label\":\"Payload\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"kg\"},{\"key\":\"repeatability_mm\",\"label\":\"Repeatability\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"mm\"},{\"key\":\"tcp_speed_mps\",\"label\":\"Max TCP speed\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"m/s\"},{\"key\":\"speed_mps\",\"label\":\"Max speed\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"m/s\"},{\"key\":\"step_cm\",\"label\":\"Max step height\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"cm\"},{\"key\":\"slope_deg\",\"label\":\"Max slope\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"°\"},{\"key\":\"peak_torque_nm\",\"label\":\"Peak torque\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"Nm\"},{\"key\":\"rated_torque_nm\",\"label\":\"Rated torque\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"Nm\"},{\"key\":\"rated_speed_rpm\",\"label\":\"Rated speed\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"rpm\"},{\"key\":\"ratio\",\"label\":\"Gear ratio\",\"kind\":\"text\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"backlash_arcmin\",\"label\":\"Backlash\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"arcmin\"},{\"key\":\"diameter_mm\",\"label\":\"Outer diameter\",\"kind\":\"number\",\"group\":\"Dimensions\",\"private\":false,\"unit\":\"mm\"},{\"key\":\"resolution_bits\",\"label\":\"Resolution\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"bit\"},{\"key\":\"enc_absolute\",\"label\":\"Absolute\",\"kind\":\"select\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"current_cont_a\",\"label\":\"Continuous current\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"A\"},{\"key\":\"current_peak_a\",\"label\":\"Peak current\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"A\"},{\"key\":\"voltage_v\",\"label\":\"Voltage\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"V\"},{\"key\":\"channels\",\"label\":\"Channels\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"range_m\",\"label\":\"Range\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"m\"},{\"key\":\"points_per_s\",\"label\":\"Points per second\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"ft_axes\",\"label\":\"Axes\",\"kind\":\"select\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"force_range_n\",\"label\":\"Force range\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"N\"},{\"key\":\"torque_range_nm\",\"label\":\"Torque range\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"Nm\"},{\"key\":\"imu_axes\",\"label\":\"Axes\",\"kind\":\"select\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"output_hz\",\"label\":\"Output rate\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"Hz\"},{\"key\":\"taxels\",\"label\":\"Sensing points\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"spatial_res_mm\",\"label\":\"Spatial resolution\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"mm\"},{\"key\":\"tops\",\"label\":\"AI performance\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"TOPS\"},{\"key\":\"cpu\",\"label\":\"CPU\",\"kind\":\"text\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"gpu\",\"label\":\"GPU\",\"kind\":\"text\",\"group\":\"Performance\",\"private\":false,\"unit\":\"\"},{\"key\":\"memory_gb\",\"label\":\"Memory\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"GB\"},{\"key\":\"capacity_wh\",\"label\":\"Capacity\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"Wh\"},{\"key\":\"chemistry\",\"label\":\"Chemistry\",\"kind\":\"select\",\"group\":\"Power\",\"private\":false,\"unit\":\"\"},{\"key\":\"cycles\",\"label\":\"Cycle life\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"\"},{\"key\":\"peak_force_n\",\"label\":\"Peak force (linear)\",\"kind\":\"number\",\"group\":\"Performance\",\"private\":false,\"unit\":\"N\"},{\"key\":\"runtime_h\",\"label\":\"Runtime\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"h\"},{\"key\":\"resolution_mp\",\"label\":\"Resolution\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"MP\"},{\"key\":\"fps\",\"label\":\"Frame rate\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"fps\"},{\"key\":\"fov_h_deg\",\"label\":\"Horizontal FoV\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"°\"},{\"key\":\"fov_v_deg\",\"label\":\"Vertical FoV\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"°\"},{\"key\":\"depth_min_m\",\"label\":\"Min depth\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"m\"},{\"key\":\"depth_max_m\",\"label\":\"Max depth\",\"kind\":\"number\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"m\"},{\"key\":\"shutter\",\"label\":\"Shutter\",\"kind\":\"select\",\"group\":\"Imaging\",\"private\":false,\"unit\":\"\"},{\"key\":\"sample_rate_hz\",\"label\":\"Sample rate\",\"kind\":\"number\",\"group\":\"Capture\",\"private\":false,\"unit\":\"Hz\"},{\"key\":\"latency_ms\",\"label\":\"Latency\",\"kind\":\"number\",\"group\":\"Capture\",\"private\":false,\"unit\":\"ms\"},{\"key\":\"tracking\",\"label\":\"Tracking\",\"kind\":\"text\",\"group\":\"Capture\",\"private\":false,\"unit\":\"\"},{\"key\":\"haptics\",\"label\":\"Force / haptic feedback\",\"kind\":\"select\",\"group\":\"Capture\",\"private\":false,\"unit\":\"\"},{\"key\":\"streams\",\"label\":\"Recorded streams\",\"kind\":\"tags\",\"group\":\"Capture\",\"private\":false,\"unit\":\"\"},{\"key\":\"formats\",\"label\":\"Output formats\",\"kind\":\"tags\",\"group\":\"Capture\",\"private\":false,\"unit\":\"\"},{\"key\":\"actuation\",\"label\":\"Actuation\",\"kind\":\"select\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"tactile\",\"label\":\"Tactile sensing\",\"kind\":\"select\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"body_actuator\",\"label\":\"Body actuator\",\"kind\":\"select\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"transmission\",\"label\":\"Transmission\",\"kind\":\"text\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"mounting\",\"label\":\"Mounting\",\"kind\":\"text\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"sensors\",\"label\":\"External sensors\",\"kind\":\"tags\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"imu\",\"label\":\"Built-in IMU\",\"kind\":\"select\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"interface\",\"label\":\"Interfaces\",\"kind\":\"tags\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"ip_rating\",\"label\":\"Ingress protection\",\"kind\":\"text\",\"group\":\"Hardware\",\"private\":false,\"unit\":\"\"},{\"key\":\"battery\",\"label\":\"Battery\",\"kind\":\"text\",\"group\":\"Power\",\"private\":false,\"unit\":\"\"},{\"key\":\"charging\",\"label\":\"Charging\",\"kind\":\"text\",\"group\":\"Power\",\"private\":false,\"unit\":\"\"},{\"key\":\"power_w\",\"label\":\"Power\",\"kind\":\"number\",\"group\":\"Power\",\"private\":false,\"unit\":\"W\"},{\"key\":\"onboard_model\",\"label\":\"AI model it runs\",\"kind\":\"text\",\"group\":\"Software\",\"private\":false,\"unit\":\"\"},{\"key\":\"price_usd\",\"label\":\"Price\",\"kind\":\"number\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"USD\"},{\"key\":\"targets\",\"label\":\"Target sectors\",\"kind\":\"multi\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"shipments\",\"label\":\"Units shipped (latest year)\",\"kind\":\"number\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"shipments_year\",\"label\":\"Shipments year\",\"kind\":\"year\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"availability\",\"label\":\"Availability\",\"kind\":\"select\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"lead_time\",\"label\":\"Lead time\",\"kind\":\"text\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"regions\",\"label\":\"Sold in\",\"kind\":\"tags\",\"group\":\"Commercial\",\"private\":false,\"unit\":\"\"},{\"key\":\"certs\",\"label\":\"Certification\",\"kind\":\"certs\",\"group\":\"Certification\",\"private\":false,\"unit\":\"\"},{\"key\":\"image\",\"label\":\"Image\",\"kind\":\"image\",\"group\":\"image\",\"private\":false,\"unit\":\"\"},{\"key\":\"gallery\",\"label\":\"Gallery\",\"kind\":\"gallery\",\"group\":\"image\",\"private\":false,\"unit\":\"\"},{\"key\":\"video\",\"label\":\"Official video\",\"kind\":\"url\",\"group\":\"image\",\"private\":false,\"unit\":\"\"},{\"key\":\"versions\",\"label\":\"Versions\",\"kind\":\"versions\",\"group\":\"models\",\"private\":false,\"unit\":\"\"},{\"key\":\"options\",\"label\":\"Configurations\",\"kind\":\"options\",\"group\":\"models\",\"private\":false,\"unit\":\"\"},{\"key\":\"quote_email\",\"label\":\"Send quote requests to\",\"kind\":\"text\",\"group\":\"ordering\",\"private\":false,\"unit\":\"\"}]}"),
	model: {
		"label": "Model",
		"plural": "Models",
		"facets": [
			"kind",
			"weights",
			"runs_on",
			"design",
			"action_head",
			"rel:developer",
			"embodiments",
			"params_b"
		],
		"columns": [
			"rel:developer",
			"kind",
			"params_b",
			"action_hz",
			"runs_on",
			"weights",
			"calc:robots",
			"released"
		],
		"card_specs": [],
		"date_field": "released",
		"fmap": {
			"kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"released": {
				"label": "Released",
				"kind": "date",
				"unit": ""
			},
			"weights": {
				"label": "Weights",
				"kind": "select",
				"unit": ""
			},
			"license": {
				"label": "License",
				"kind": "text",
				"unit": ""
			},
			"embodiments": {
				"label": "Embodiments",
				"kind": "tags",
				"unit": ""
			},
			"url": {
				"label": "Link",
				"kind": "url",
				"unit": ""
			},
			"params_b": {
				"label": "Parameters",
				"kind": "number",
				"unit": "B"
			},
			"design": {
				"label": "Design",
				"kind": "select",
				"unit": ""
			},
			"backbone": {
				"label": "Backbone",
				"kind": "text",
				"unit": ""
			},
			"action_head": {
				"label": "Action output",
				"kind": "select",
				"unit": ""
			},
			"action_hz": {
				"label": "Action rate",
				"kind": "number",
				"unit": "Hz"
			},
			"planner_hz": {
				"label": "Planner rate",
				"kind": "text",
				"unit": ""
			},
			"inputs": {
				"label": "Inputs",
				"kind": "tags",
				"unit": ""
			},
			"action_space": {
				"label": "Action space",
				"kind": "text",
				"unit": ""
			},
			"training_data": {
				"label": "Training data",
				"kind": "text",
				"unit": ""
			},
			"robot_hours": {
				"label": "Robot data",
				"kind": "number",
				"unit": "h"
			},
			"train_compute": {
				"label": "Training compute",
				"kind": "text",
				"unit": ""
			},
			"finetune": {
				"label": "Fine-tuning by users",
				"kind": "select",
				"unit": ""
			},
			"runs_on": {
				"label": "Runs",
				"kind": "select",
				"unit": ""
			},
			"inference_hw": {
				"label": "Inference hardware",
				"kind": "text",
				"unit": ""
			},
			"latency_ms": {
				"label": "Latency",
				"kind": "number",
				"unit": "ms"
			},
			"min_gpu": {
				"label": "Minimum GPU",
				"kind": "text",
				"unit": ""
			}
		},
		"rmap": {
			"developer": { "label": "Developer" },
			"trained_on": { "label": "Trained on" }
		},
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "weights",
				"label": "Weights",
				"kind": "select",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "license",
				"label": "License",
				"kind": "text",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "embodiments",
				"label": "Embodiments",
				"kind": "tags",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "params_b",
				"label": "Parameters",
				"kind": "number",
				"group": "Architecture",
				"private": false,
				"unit": "B"
			},
			{
				"key": "design",
				"label": "Design",
				"kind": "select",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "backbone",
				"label": "Backbone",
				"kind": "text",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "action_head",
				"label": "Action output",
				"kind": "select",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "action_hz",
				"label": "Action rate",
				"kind": "number",
				"group": "Architecture",
				"private": false,
				"unit": "Hz"
			},
			{
				"key": "planner_hz",
				"label": "Planner rate",
				"kind": "text",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "inputs",
				"label": "Inputs",
				"kind": "tags",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "action_space",
				"label": "Action space",
				"kind": "text",
				"group": "Architecture",
				"private": false,
				"unit": ""
			},
			{
				"key": "training_data",
				"label": "Training data",
				"kind": "text",
				"group": "Training",
				"private": false,
				"unit": ""
			},
			{
				"key": "robot_hours",
				"label": "Robot data",
				"kind": "number",
				"group": "Training",
				"private": false,
				"unit": "h"
			},
			{
				"key": "train_compute",
				"label": "Training compute",
				"kind": "text",
				"group": "Training",
				"private": false,
				"unit": ""
			},
			{
				"key": "finetune",
				"label": "Fine-tuning by users",
				"kind": "select",
				"group": "Training",
				"private": false,
				"unit": ""
			},
			{
				"key": "runs_on",
				"label": "Runs",
				"kind": "select",
				"group": "Running it",
				"private": false,
				"unit": ""
			},
			{
				"key": "inference_hw",
				"label": "Inference hardware",
				"kind": "text",
				"group": "Running it",
				"private": false,
				"unit": ""
			},
			{
				"key": "latency_ms",
				"label": "Latency",
				"kind": "number",
				"group": "Running it",
				"private": false,
				"unit": "ms"
			},
			{
				"key": "min_gpu",
				"label": "Minimum GPU",
				"kind": "text",
				"group": "Running it",
				"private": false,
				"unit": ""
			}
		]
	},
	software: {
		"label": "Software",
		"plural": "Software",
		"facets": [
			"license_model",
			"platforms",
			"works_with",
			"languages",
			"status",
			"rel:developer"
		],
		"columns": [
			"rel:developer",
			"license_model",
			"platforms",
			"works_with",
			"status",
			"released"
		],
		"card_specs": [],
		"date_field": "released",
		"fmap": {
			"kind": {
				"label": "Kind",
				"kind": "select",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"released": {
				"label": "Released",
				"kind": "date",
				"unit": ""
			},
			"license_model": {
				"label": "License",
				"kind": "select",
				"unit": ""
			},
			"license": {
				"label": "License name",
				"kind": "text",
				"unit": ""
			},
			"pricing": {
				"label": "Pricing",
				"kind": "text",
				"unit": ""
			},
			"platforms": {
				"label": "Runs on",
				"kind": "tags",
				"unit": ""
			},
			"works_with": {
				"label": "Works with",
				"kind": "tags",
				"unit": ""
			},
			"languages": {
				"label": "APIs",
				"kind": "tags",
				"unit": ""
			},
			"url": {
				"label": "Website",
				"kind": "url",
				"unit": ""
			},
			"repo": {
				"label": "Code",
				"kind": "url",
				"unit": ""
			},
			"docs": {
				"label": "Docs",
				"kind": "url",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"developer": { "label": "Developer" },
			"supports": { "label": "Supports" }
		},
		"fields": [
			{
				"key": "kind",
				"label": "Kind",
				"kind": "select",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "released",
				"label": "Released",
				"kind": "date",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "license_model",
				"label": "License",
				"kind": "select",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "license",
				"label": "License name",
				"kind": "text",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "pricing",
				"label": "Pricing",
				"kind": "text",
				"group": "Overview",
				"private": false,
				"unit": ""
			},
			{
				"key": "platforms",
				"label": "Runs on",
				"kind": "tags",
				"group": "Technical",
				"private": false,
				"unit": ""
			},
			{
				"key": "works_with",
				"label": "Works with",
				"kind": "tags",
				"group": "Technical",
				"private": false,
				"unit": ""
			},
			{
				"key": "languages",
				"label": "APIs",
				"kind": "tags",
				"group": "Technical",
				"private": false,
				"unit": ""
			},
			{
				"key": "url",
				"label": "Website",
				"kind": "url",
				"group": "Web",
				"private": false,
				"unit": ""
			},
			{
				"key": "repo",
				"label": "Code",
				"kind": "url",
				"group": "Web",
				"private": false,
				"unit": ""
			},
			{
				"key": "docs",
				"label": "Docs",
				"kind": "url",
				"group": "Web",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	},
	funding: {
		"label": "Funding round",
		"plural": "Funding",
		"facets": [
			"round",
			"rel:company",
			"rel:investors",
			"amount_usd_m"
		],
		"columns": [
			"date",
			"rel:company",
			"round",
			"amount_usd_m",
			"rel:investors"
		],
		"card_specs": [],
		"date_field": "date",
		"fmap": {
			"date": {
				"label": "Date",
				"kind": "date",
				"unit": ""
			},
			"round": {
				"label": "Round",
				"kind": "select",
				"unit": ""
			},
			"amount_usd_m": {
				"label": "Amount",
				"kind": "number",
				"unit": "USD m"
			},
			"valuation_usd_m": {
				"label": "Post-money valuation",
				"kind": "number",
				"unit": "USD m"
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"company": { "label": "Company" },
			"investors": { "label": "Investors" }
		},
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "round",
				"label": "Round",
				"kind": "select",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "amount_usd_m",
				"label": "Amount",
				"kind": "number",
				"group": "",
				"private": false,
				"unit": "USD m"
			},
			{
				"key": "valuation_usd_m",
				"label": "Post-money valuation",
				"kind": "number",
				"group": "",
				"private": false,
				"unit": "USD m"
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	},
	deployment: {
		"label": "Deployment",
		"plural": "Deployments",
		"facets": [
			"status",
			"rel:vendor",
			"rel:customer",
			"units"
		],
		"columns": [
			"date",
			"rel:vendor",
			"rel:customer",
			"rel:robots",
			"status",
			"units"
		],
		"card_specs": [],
		"date_field": "date",
		"fmap": {
			"date": {
				"label": "Date",
				"kind": "date",
				"unit": ""
			},
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"units": {
				"label": "Units",
				"kind": "number",
				"unit": ""
			},
			"use_case": {
				"label": "Use case",
				"kind": "text",
				"unit": ""
			},
			"location": {
				"label": "Location",
				"kind": "text",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"vendor": { "label": "Vendor" },
			"customer": { "label": "Customer" },
			"integrator": { "label": "Integrator" },
			"robots": { "label": "Robots" },
			"models": { "label": "Models" }
		},
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "units",
				"label": "Units",
				"kind": "number",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "use_case",
				"label": "Use case",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "location",
				"label": "Location",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	},
	paper: {
		"label": "Paper",
		"plural": "Papers",
		"facets": [
			"focus",
			"rel:orgs",
			"venue"
		],
		"columns": [
			"date",
			"rel:orgs",
			"focus",
			"venue"
		],
		"card_specs": [],
		"date_field": "date",
		"fmap": {
			"date": {
				"label": "Date",
				"kind": "date",
				"unit": ""
			},
			"authors_text": {
				"label": "Authors",
				"kind": "text",
				"unit": ""
			},
			"venue": {
				"label": "Venue",
				"kind": "text",
				"unit": ""
			},
			"url": {
				"label": "Link",
				"kind": "url",
				"unit": ""
			},
			"focus": {
				"label": "Focus areas",
				"kind": "multi",
				"unit": ""
			},
			"origin": {
				"label": "Origin",
				"kind": "select",
				"unit": ""
			},
			"source_site": {
				"label": "Reposted from (site)",
				"kind": "text",
				"unit": ""
			},
			"source_author": {
				"label": "Original author",
				"kind": "text",
				"unit": ""
			},
			"lab": {
				"label": "Lab",
				"kind": "text",
				"unit": ""
			},
			"credits": {
				"label": "Credits (people)",
				"kind": "longtext",
				"unit": ""
			},
			"references": {
				"label": "References",
				"kind": "longtext",
				"unit": ""
			},
			"image": {
				"label": "Thumbnail image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"authors": { "label": "Authors" },
			"orgs": { "label": "Organisations" },
			"about": { "label": "Covers" }
		},
		"fields": [
			{
				"key": "date",
				"label": "Date",
				"kind": "date",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "authors_text",
				"label": "Authors",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "venue",
				"label": "Venue",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "focus",
				"label": "Focus areas",
				"kind": "multi",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "origin",
				"label": "Origin",
				"kind": "select",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "source_site",
				"label": "Reposted from (site)",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "source_author",
				"label": "Original author",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "lab",
				"label": "Lab",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "credits",
				"label": "Credits (people)",
				"kind": "longtext",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "references",
				"label": "References",
				"kind": "longtext",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Thumbnail image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	},
	event: {
		"label": "Event",
		"plural": "Events",
		"facets": [
			"status",
			"city",
			"rel:organisers"
		],
		"columns": [
			"date",
			"status",
			"venue",
			"city",
			"rel:organisers"
		],
		"card_specs": [],
		"date_field": "date",
		"fmap": {
			"status": {
				"label": "Status",
				"kind": "select",
				"unit": ""
			},
			"date": {
				"label": "Date",
				"kind": "date",
				"unit": ""
			},
			"end_date": {
				"label": "End date",
				"kind": "date",
				"unit": ""
			},
			"venue": {
				"label": "Venue",
				"kind": "text",
				"unit": ""
			},
			"city": {
				"label": "City",
				"kind": "text",
				"unit": ""
			},
			"url": {
				"label": "Link",
				"kind": "url",
				"unit": ""
			},
			"schedule": {
				"label": "Schedule",
				"kind": "schedule",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"featured": { "label": "Featured" },
			"organisers": { "label": "Organisers" }
		},
		"fields": [
			{
				"key": "status",
				"label": "Status",
				"kind": "select",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "date",
				"label": "Date",
				"kind": "date",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "end_date",
				"label": "End date",
				"kind": "date",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "venue",
				"label": "Venue",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "city",
				"label": "City",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "url",
				"label": "Link",
				"kind": "url",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "schedule",
				"label": "Schedule",
				"kind": "schedule",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	},
	company: {
		"label": "Organisation",
		"plural": "Organisations",
		"facets": [
			"roles",
			"country",
			"stage",
			"founded"
		],
		"columns": [
			"roles",
			"country",
			"founded",
			"stage",
			"calc:hiring"
		],
		"card_specs": [],
		"date_field": null,
		"fmap": {
			"roles": {
				"label": "Roles",
				"kind": "multi",
				"unit": ""
			},
			"country": {
				"label": "Country",
				"kind": "text",
				"unit": ""
			},
			"founded": {
				"label": "Founded",
				"kind": "year",
				"unit": ""
			},
			"stage": {
				"label": "Stage",
				"kind": "select",
				"unit": ""
			},
			"employees": {
				"label": "Employees",
				"kind": "number",
				"unit": ""
			},
			"locations": {
				"label": "HQ and offices",
				"kind": "locations",
				"unit": ""
			},
			"open_to": {
				"label": "Open to",
				"kind": "multi",
				"unit": ""
			},
			"open_note": {
				"label": "What you're looking for",
				"kind": "longtext",
				"unit": ""
			},
			"website": {
				"label": "Website",
				"kind": "url",
				"unit": ""
			},
			"careers": {
				"label": "Careers page",
				"kind": "url",
				"unit": ""
			},
			"linkedin": {
				"label": "LinkedIn",
				"kind": "url",
				"unit": ""
			},
			"x": {
				"label": "X / Twitter",
				"kind": "url",
				"unit": ""
			},
			"github": {
				"label": "GitHub",
				"kind": "url",
				"unit": ""
			},
			"huggingface": {
				"label": "Hugging Face",
				"kind": "url",
				"unit": ""
			},
			"email": {
				"label": "Contact email",
				"kind": "text",
				"unit": ""
			},
			"hw_chain": {
				"label": "Assembly chain",
				"kind": "multi",
				"unit": ""
			},
			"components": {
				"label": "Parts supplied",
				"kind": "multi",
				"unit": ""
			},
			"model_chain": {
				"label": "Model chain",
				"kind": "multi",
				"unit": ""
			},
			"referral_status": {
				"label": "Referral status",
				"kind": "select",
				"unit": ""
			},
			"referral_terms": {
				"label": "Referral terms",
				"kind": "text",
				"unit": ""
			},
			"referral_contact": {
				"label": "Referral contact",
				"kind": "text",
				"unit": ""
			},
			"agreement_ref": {
				"label": "Agreement reference",
				"kind": "text",
				"unit": ""
			},
			"image": {
				"label": "Image",
				"kind": "image",
				"unit": ""
			}
		},
		"rmap": {
			"leaders": { "label": "Leadership" },
			"partners": { "label": "Partners" },
			"backed_by": { "label": "Investors" },
			"sells_to": { "label": "Customers" },
			"buys_from": { "label": "Suppliers" },
			"highlights": { "label": "Highlights" }
		},
		"fields": [
			{
				"key": "roles",
				"label": "Roles",
				"kind": "multi",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "country",
				"label": "Country",
				"kind": "text",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "founded",
				"label": "Founded",
				"kind": "year",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "stage",
				"label": "Stage",
				"kind": "select",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "employees",
				"label": "Employees",
				"kind": "number",
				"group": "",
				"private": false,
				"unit": ""
			},
			{
				"key": "locations",
				"label": "HQ and offices",
				"kind": "locations",
				"group": "locations",
				"private": false,
				"unit": ""
			},
			{
				"key": "open_to",
				"label": "Open to",
				"kind": "multi",
				"group": "community",
				"private": false,
				"unit": ""
			},
			{
				"key": "open_note",
				"label": "What you're looking for",
				"kind": "longtext",
				"group": "community",
				"private": false,
				"unit": ""
			},
			{
				"key": "website",
				"label": "Website",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "careers",
				"label": "Careers page",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "linkedin",
				"label": "LinkedIn",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "x",
				"label": "X / Twitter",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "github",
				"label": "GitHub",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "huggingface",
				"label": "Hugging Face",
				"kind": "url",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "email",
				"label": "Contact email",
				"kind": "text",
				"group": "links",
				"private": false,
				"unit": ""
			},
			{
				"key": "hw_chain",
				"label": "Assembly chain",
				"kind": "multi",
				"group": "chain",
				"private": false,
				"unit": ""
			},
			{
				"key": "components",
				"label": "Parts supplied",
				"kind": "multi",
				"group": "chain",
				"private": false,
				"unit": ""
			},
			{
				"key": "model_chain",
				"label": "Model chain",
				"kind": "multi",
				"group": "chain",
				"private": false,
				"unit": ""
			},
			{
				"key": "referral_status",
				"label": "Referral status",
				"kind": "select",
				"group": "",
				"private": true,
				"unit": ""
			},
			{
				"key": "referral_terms",
				"label": "Referral terms",
				"kind": "text",
				"group": "",
				"private": true,
				"unit": ""
			},
			{
				"key": "referral_contact",
				"label": "Referral contact",
				"kind": "text",
				"group": "",
				"private": true,
				"unit": ""
			},
			{
				"key": "agreement_ref",
				"label": "Agreement reference",
				"kind": "text",
				"group": "",
				"private": true,
				"unit": ""
			},
			{
				"key": "image",
				"label": "Image",
				"kind": "image",
				"group": "image",
				"private": false,
				"unit": ""
			}
		]
	}
};
// shared/md.ts
/** Mini-markdown, ported from backend/ep/util.py so legal and About pages match. */
function esc(s) {
	return String(s ?? "").replace(/[&<>"']/g, (c) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[c]);
}
function mdInline(s, resolve) {
	s = esc(s);
	const codes = [];
	s = s.replace(/`([^`]+)`/g, (_m, code) => {
		codes.push(code);
		return `\0${codes.length - 1}\0`;
	});
	s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
	s = s.replace(/(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])/g, "<em>$1</em>");
	s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) => {
		const u = url.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
		if (!/^(https?:\/\/|\/|#|mailto:)/.test(u)) return m;
		const ext = u.startsWith("http") ? " target=_blank rel=noopener" : "";
		return `<a href="${esc(u)}"${ext}>${text}</a>`;
	});
	s = s.replace(/\[\[([^\]]+)\]\]/g, (_m, label) => {
		const raw = String(label).replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, "\"").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
		const hit = resolve?.(raw);
		if (hit) return `<a href="${esc(hit.href)}">${esc(hit.name)}</a>`;
		return `<span class=missing title="No record yet">${esc(raw)}</span>`;
	});
	s = s.replace(/\0(\d+)\0/g, (_m, i) => `<code>${codes[Number(i)]}</code>`);
	return s;
}
var IMG_LINE = /^!\[([^\]]*)\]\(([^)\s]+)\)$/;
function md(text, resolve, embed) {
	const out = [];
	let para = [];
	let lst = null;
	let code = [];
	let inCode = false;
	const flush = () => {
		if (para.length) {
			out.push("<p>" + mdInline(para.join(" "), resolve) + "</p>");
			para = [];
		}
		if (lst) {
			const [tag, items] = lst;
			out.push(`<${tag}>` + items.map((i) => `<li>${mdInline(i, resolve)}</li>`).join("") + `</${tag}>`);
			lst = null;
		}
	};
	for (const raw of (text || "").replace(/\r\n/g, "\n").split("\n")) {
		if (raw.trim().startsWith("```")) {
			if (inCode) {
				out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
				code = [];
				inCode = false;
			} else {
				flush();
				inCode = true;
			}
			continue;
		}
		if (inCode) {
			code.push(raw);
			continue;
		}
		const st = raw.trim();
		const mH = st.match(/^(#{1,4})\s+(.*)/);
		const mUl = st.match(/^[-*]\s+(.*)/);
		const mOl = st.match(/^\d+[.)]\s+(.*)/);
		if (!st) flush();
		else if (mH) {
			flush();
			const n = mH[1].length + 1;
			out.push(`<h${n}>${mdInline(mH[2], resolve)}</h${n}>`);
		} else if (st === "---" || st === "***") {
			flush();
			out.push("<hr>");
		} else if (IMG_LINE.test(st) && /^https?:\/\//i.test(IMG_LINE.exec(st)[2])) {
			flush();
			const [, cap, src] = IMG_LINE.exec(st);
			out.push(`<figure class=mimg><img src='${esc(src)}' alt='${esc(cap)}' loading=lazy referrerpolicy=no-referrer>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ""}</figure>`);
		} else if (embed && /^https?:\/\/\S+$/.test(st) && embed(st)) {
			flush();
			out.push(`<div class=membed>${embed(st)}</div>`);
		} else if (st.startsWith(">")) {
			flush();
			out.push("<blockquote>" + mdInline(st.slice(1).trim(), resolve) + "</blockquote>");
		} else if (mUl || mOl) {
			const tag = mUl ? "ul" : "ol";
			if (para.length) flush();
			if (!lst || lst[0] !== tag) {
				flush();
				lst = [tag, []];
			}
			lst[1].push((mUl || mOl)[1]);
		} else {
			if (lst) flush();
			para.push(st);
		}
	}
	if (inCode) out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
	flush();
	return out.join("\n");
}
function fillLegal(src, contact = "contact@embodiment.place", logDays = 14, updated = "16 November 2026") {
	return src.replaceAll("{contact_email}", contact).replaceAll("{log_days}", String(logDays)).replaceAll("{updated}", updated);
}
function stripMd(text) {
	let t = (text || "").replace(/```[\s\S]*?```/g, " ");
	t = t.replace(/^!\[[^\]]*\]\([^)]*\)\s*$/gm, " ");
	t = t.replace(/^https?:\/\/\S+\s*$/gm, " ");
	t = t.replace(/\[\[([^\]]+)\]\]/g, "$1");
	t = t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
	t = t.replace(/[#*>`_-]+/g, " ");
	return t.replace(/\s+/g, " ").trim();
}
// shared/md5.ts
/** Sync MD5 (bytes), enough to match hashlib.md5 for placeholder colours. */
var S = [
	7,
	12,
	17,
	22,
	7,
	12,
	17,
	22,
	7,
	12,
	17,
	22,
	7,
	12,
	17,
	22,
	5,
	9,
	14,
	20,
	5,
	9,
	14,
	20,
	5,
	9,
	14,
	20,
	5,
	9,
	14,
	20,
	4,
	11,
	16,
	23,
	4,
	11,
	16,
	23,
	4,
	11,
	16,
	23,
	4,
	11,
	16,
	23,
	6,
	10,
	15,
	21,
	6,
	10,
	15,
	21,
	6,
	10,
	15,
	21,
	6,
	10,
	15,
	21
];
var K = Array.from({ length: 64 }, (_, i) => Math.floor(2 ** 32 * Math.abs(Math.sin(i + 1))));
function rotl(x, n) {
	return x << n | x >>> 32 - n;
}
function md5bytes(text) {
	const msg = new TextEncoder().encode(text);
	const len = msg.length;
	const bitLen = len * 8;
	const padLen = (len + 8 >> 6 << 6) + 56;
	const buf = new Uint8Array(padLen + 8);
	buf.set(msg);
	buf[len] = 128;
	const view = new DataView(buf.buffer);
	view.setUint32(padLen, bitLen >>> 0, true);
	view.setUint32(padLen + 4, Math.floor(bitLen / 2 ** 32), true);
	let a0 = 1732584193, b0 = 4023233417, c0 = 2562383102, d0 = 271733878;
	for (let off = 0; off < buf.length; off += 64) {
		const M = /* @__PURE__ */ new Uint32Array(16);
		for (let i = 0; i < 16; i++) M[i] = view.getUint32(off + i * 4, true);
		let A = a0, B = b0, C = c0, D = d0;
		for (let i = 0; i < 64; i++) {
			let F, g;
			if (i < 16) {
				F = B & C | ~B & D;
				g = i;
			} else if (i < 32) {
				F = D & B | ~D & C;
				g = (5 * i + 1) % 16;
			} else if (i < 48) {
				F = B ^ C ^ D;
				g = (3 * i + 5) % 16;
			} else {
				F = C ^ (B | ~D);
				g = 7 * i % 16;
			}
			const tmp = D;
			D = C;
			C = B;
			B = B + rotl(A + F + K[i] + M[g] >>> 0, S[i]) >>> 0;
			A = tmp;
		}
		a0 = a0 + A >>> 0;
		b0 = b0 + B >>> 0;
		c0 = c0 + C >>> 0;
		d0 = d0 + D >>> 0;
	}
	const out = /* @__PURE__ */ new Uint8Array(16);
	const dv = new DataView(out.buffer);
	dv.setUint32(0, a0, true);
	dv.setUint32(4, b0, true);
	dv.setUint32(8, c0, true);
	dv.setUint32(12, d0, true);
	return out;
}
// shared/ph.ts
/** Record placeholders, colours fixed per slug (same algorithm as backend/ep/ui.py ph()). */
function initialsOf(name) {
	return ((name.match(/[A-Za-z0-9]+/g) || []).slice(0, 2).map((w) => w[0]).join("") || "?").toUpperCase();
}
function safeImg(src) {
	if (!src) return false;
	if (/^https?:\/\//i.test(src) || src.startsWith("/media/") || src.startsWith("/")) return true;
	return false;
}
function galleryItems(data) {
	const raw = data ? fieldVal(data, "gallery") : null;
	return (Array.isArray(raw) ? raw : []).filter((r) => !!r && typeof r === "object" && typeof r.url === "string" && safeImg(r.url));
}
function imageSrc(data) {
	if (!data) return null;
	const img = data.image;
	let src = "";
	let fit = "cover";
	let from = "";
	if (img && typeof img === "object") {
		src = String(img.v || "");
		if (img.fit === "contain") fit = "contain";
		from = String(img.src || "");
	} else if (typeof img === "string") src = img;
	if (!src) {
		const gal = galleryItems(data);
		if (gal[0]) {
			src = gal[0].url;
			fit = gal[0].fit === "contain" ? "contain" : "contain";
			fit = "contain";
			from = gal[0].src || "";
		}
	}
	if (!src || !safeImg(src)) return null;
	if (!/^https?:\/\//i.test(src) && !src.startsWith("/")) src = `/media/${src}`;
	return {
		src,
		fit,
		from
	};
}
function phOf(rec, cls = "") {
	const img = imageSrc(rec.data);
	const hb = md5bytes(rec.slug);
	const pat = hb[0] % 6;
	const a = 12 + hb[1] % 50;
	const b = 58 + hb[2] % 34;
	const c = 30 + hb[3] % 50;
	return {
		pat,
		a: hb[4] % 9 === 0 ? "#ff4a1c" : `hsl(0 0% ${a}%)`,
		b,
		c,
		initials: initialsOf(rec.name),
		letterless: HW_LETTERLESS.includes(rec.type) || NO_IMAGE.includes(rec.type),
		src: img?.src || null,
		fit: img?.fit || "cover",
		cls
	};
}
// backend/worker/src/feed.ts
function parseFeedCursor(raw) {
	if (!raw) return null;
	const m = /^(\d{4}-\d{2}-\d{2})_(\d+)$/.exec(String(raw).trim());
	if (!m) return null;
	const [y, mo, d] = m[1].split("-").map(Number);
	if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
	const dt = new Date(Date.UTC(y, mo - 1, d));
	if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
	const id = Number(m[2]);
	if (!Number.isFinite(id) || id < 1) return null;
	return {
		at: m[1],
		id
	};
}
function feedDateOf(r) {
	if (r.feed_at) return String(r.feed_at).slice(0, 10);
	if (r.created) return String(r.created).slice(0, 10);
	return "";
}
function formatCursor(r) {
	return `${feedDateOf(r)}_${r.id}`;
}
// Posts shown per page in the home feed and post/paper lists; the rest load with "Load more" or on scroll.
const FEED_PAGE_SIZE = 6;
async function feedPage(db, opts = {}) {
	const limit = opts.limit ?? 20;
	const binds = [];
	const where = [];
	if (opts.types?.length) {
		where.push(`type IN (${opts.types.map(() => "?").join(",")})`);
		binds.push(...opts.types);
	}
	if (opts.ids?.length) {
		where.push("id IN (SELECT value FROM json_each(?))");
		binds.push(JSON.stringify(opts.ids));
	}
	if (!opts.includePrivate) where.push("private = 0");
	if (opts.authorId) {
		where.push("author_id = ?");
		binds.push(opts.authorId);
	}
	if (opts.category) {
		const label = POST_CATEGORIES.find((c) => c.toLowerCase() === opts.category.toLowerCase()) || opts.category;
		where.push("(type = 'paper' OR COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind')) = ?)");
		binds.push(label);
	}
	if (opts.original) where.push("COALESCE(json_extract(data, '$.origin.v'), json_extract(data, '$.origin')) = 'Original'");
	const cur = parseFeedCursor(opts.before);
	if (cur) {
		where.push("(COALESCE(feed_at, substr(created, 1, 10), '') < ? OR (COALESCE(feed_at, substr(created, 1, 10), '') = ? AND id < ?))");
		binds.push(cur.at, cur.at, cur.id);
	}
	const sql = `SELECT * FROM records ${where.length ? "WHERE " + where.join(" AND ") : ""}
    ORDER BY COALESCE(feed_at, substr(created, 1, 10), '') DESC, id DESC LIMIT ?`;
	binds.push(limit + 1);
	const rows = await allPublic(db, sql, ...binds);
	const more = rows.length > limit;
	const slice = rows.slice(0, limit);
	const last = slice[slice.length - 1];
	return {
		rows: slice,
		next: more && last ? formatCursor(last) : null
	};
}
// backend/worker/src/public.ts
var VIEWS = listViews_default;
function phModel(rec, cls = "", via) {
	if (via) return phOf({
		slug: via.slug,
		name: via.name,
		type: via.type,
		data: via.data
	}, cls);
	return phOf({
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		data: rec.data
	}, cls);
}
function viewFor(tkey) {
	return VIEWS[tkey];
}
function videoThumb(url) {
	const v = videoInfo(url);
	if (!v) return null;
	if (v.kind === "youtube") return {
		kind: "youtube",
		id: v.id,
		thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
		embed: `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`,
		srcLabel: "YouTube",
		url
	};
	return {
		kind: "x",
		id: v.id,
		thumb: "",
		embed: `https://platform.twitter.com/embed/Tweet.html?id=${v.id}&dnt=true`,
		srcLabel: "X",
		url
	};
}
async function tickerItems(db, limit = 10) {
	const types = Object.keys(DATE_FIELDS);
	return (await allPublic(db, `SELECT * FROM records WHERE type IN (${types.map(() => "?").join(",")}) AND private = 0`, ...types)).map((r) => ({
		d: recordDate(r),
		r
	})).filter((x) => x.d).sort((a, b) => b.d.localeCompare(a.d)).slice(0, limit).map(({ d, r }) => {
		const repost = r.type === "post" && fieldStr(r.data, "origin") === "Repost" && fieldStr(r.data, "link");
		const link = fieldStr(r.data, "link");
		return {
			href: repost ? link : `/r/${r.slug}`,
			external: !!repost,
			date: d.slice(0, 10),
			label: TYPE_LABELS[r.type]?.label || r.type,
			name: r.name
		};
	});
}
async function boardPayload(db) {
	const up = (await allPublic(db, "SELECT * FROM records WHERE type = 'event' AND private = 0")).filter((v) => evState(v) === "Upcoming").sort((a, b) => (fieldStr(a.data, "date") || "").localeCompare(fieldStr(b.data, "date") || "")).slice(0, 4);
	const fund = (await allPublic(db, "SELECT * FROM records WHERE type = 'funding' AND private = 0")).sort((a, b) => recordDate(b).localeCompare(recordDate(a))).slice(0, 4);
	const fl = await linksFor(db, fund.map((r) => r.id));
	return {
		upcoming: up.map((v) => ({
			date: fieldStr(v.data, "date"),
			slug: v.slug,
			name: v.name
		})),
		funding: fund.map((r) => {
			const comp = (fl.outgoing.get(r.id)?.company || [])[0];
			const amt = fieldVal(r.data, "amount_usd_m");
			const amount = amt != null && amt !== "" ? fmtNum(amt) : "";
			return {
				slug: r.slug,
				name: comp?.name || r.name,
				round: fieldStr(r.data, "round"),
				amount,
				date: recordDate(r)
			};
		})
	};
}
async function highlightsOf(db) {
	const raw = await setting(db, "home_welcome");
	let welcome = null;
	if (raw) try {
		const w = JSON.parse(raw);
		if (w.on && (w.title || w.text)) welcome = {
			title: w.title || "",
			text: w.text || "",
			btn_label: w.btn_label,
			btn_url: w.btn_url
		};
	} catch {}
	const pinsRaw = await setting(db, "home_pins");
	let pinIds = [];
	if (pinsRaw) try {
		pinIds = JSON.parse(pinsRaw).slice(0, 8);
	} catch {}
	const pinRecs = pinIds.length ? [...(await allByIds(db, pinIds)).values()] : [];
	pinRecs.sort((a, b) => pinIds.indexOf(a.id) - pinIds.indexOf(b.id));
	const pins = pinRecs.length ? await feedItems(db, pinRecs) : [];
	return {
		welcome,
		pins
	};
}
// Which link points at the organisation behind a feed item (Watchlist shows launches, funding and so on too).
const EP_ACTOR_REL = { paper: "orgs", product: "maker", model: "developer", funding: "company", deployment: "vendor", datapack: "provider" };
function epActorRel(type) {
	return EP_ACTOR_REL[type] || "about";
}
// Feed category label for records that aren't posts or papers.
const EP_WL_CAT = { product: "Launch", model: "Model", funding: "Funding", deployment: "Deployment", event: "Event", datapack: "Dataset" };
async function feedItems(db, recs) {
	if (!recs.length) return [];
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const actorIds = [];
	for (const r of recs) {
		const rel = epActorRel(r.type);
		const actor = ((outgoing.get(r.id) || {})[rel] || []).find((x) => ORG_TYPES.includes(x.type) && x.note !== "cc");
		if (actor) actorIds.push(actor.id);
	}
	const actors = await allByIds(db, actorIds);
	const soc = await socialCounts(db, recs.map((r) => r.id));
	return recs.map((r) => {
		const links = outgoing.get(r.id) || {};
		const actorHit = (links[epActorRel(r.type)] || []).find((x) => ORG_TYPES.includes(x.type) && x.note !== "cc");
		const actorRec = actorHit ? actors.get(actorHit.id) : void 0;
		const isPaper = r.type === "paper";
		const link = isPaper ? fieldStr(r.data, "url") : fieldStr(r.data, "link");
		const repost = fieldStr(r.data, "origin") === "Repost";
		const host = link ? hostOf(link) : "";
		const cat = categoryOf(r, CAT_ALIAS, POST_CATEGORIES);
		const intro = r.summary || stripMd(r.body || "").slice(0, 200);
		const credits = parseCredits(fieldVal(r.data, "credits"));
		const creditNames = credits.slice(0, 2).map(([n]) => n);
		let credit = creditNames.length ? "By " + creditNames.join(", ") : "";
		if (credits.length > 2) credit += ` +${credits.length - 2}`;
		const mins = (r.body || r.body_len) && (r.type === "post" || r.type === "paper") ? readMinutes(r.body || "", r.body_len) : 0;
		const meta = [
			relDate(feedDate(r)),
			credit,
			mins ? `${mins} min read` : "",
			host && repost ? host : ""
		].filter(Boolean).join(" · ");
		const go = repost && link ? link : `/r/${r.slug}`;
		const chips = [];
		for (const items of Object.values(links)) for (const x of items) {
			if (actorHit && x.id === actorHit.id) continue;
			chips.push({
				slug: x.slug,
				name: x.name
			});
		}
		const vidRaw = isPaper ? "" : fieldStr(r.data, "video");
		const video = vidRaw ? videoThumb(vidRaw) : null;
		const thumb = video ? {
			kind: "video",
			video
		} : {
			kind: "image",
			ph: phModel(r, "cover")
		};
		const srcSite = fieldStr(r.data, "source_site") || host || "another site";
		return {
			id: r.id,
			slug: r.slug,
			type: r.type,
			name: r.name,
			href: go,
			external: !!(repost && link),
			category: cat,
			excerpt: intro,
			meta,
			readmore: repost && link ? `Read on ${host} ↗` : "Read more →",
			date: feedDate(r),
			origin: {
				repost,
				label: repost ? `Repost · ${srcSite}` : "Original"
			},
			actor: actorRec ? {
				slug: actorRec.slug,
				name: actorRec.name,
				ph: phModel(actorRec, "av")
			} : null,
			who: actorRec ? {
				href: `/r/${actorRec.slug}`,
				name: actorRec.name
			} : { name: fieldStr(r.data, "authors_text") || "embodiment.place" },
			thumb,
			chips: chips.slice(0, 4),
			likes: soc.likes.get(r.id) || 0,
			comments: soc.comments.get(r.id) || 0,
			commentable: COMMENTABLE.includes(r.type),
			feed_at: feedDate(r)
		};
	});
}
async function homePayload(db, filter, original, before) {
	filter = FEED_FILTER_ALIAS[filter] || filter;
	const filt = FEED_FILTERS.find((f) => f.key === filter) || FEED_FILTERS[0];
	const types = filt.types;
	const ph = types.map(() => "?").join(",");
	const binds = [...types];
	let sql = `SELECT * FROM records WHERE type IN (${ph}) AND private = 0`;
	if (filter === "research") {
		sql += " AND (type = 'paper' OR COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind'), json_extract(data, '$.tags.v')) LIKE ?)";
		binds.push("%Research%");
	} else if (filter !== "all") {
		sql += " AND (COALESCE(json_extract(data, '$.kind.v'), json_extract(data, '$.kind')) = ?)";
		binds.push(filt.label);
	}
	if (original) sql += " AND COALESCE(json_extract(data, '$.origin.v'), json_extract(data, '$.origin')) = 'Original'";
	const cur = parseFeedCursor(before);
	if (cur) {
		sql += " AND (COALESCE(feed_at, substr(created, 1, 10), '') < ? OR (COALESCE(feed_at, substr(created, 1, 10), '') = ? AND id < ?))";
		binds.push(cur.at, cur.at, cur.id);
	}
	sql += " ORDER BY COALESCE(feed_at, substr(created, 1, 10), '') DESC, id DESC LIMIT ?";
	binds.push(FEED_PAGE_SIZE + 1);
	const rows = await allPublic(db, sql, ...binds);
	const more = rows.length > FEED_PAGE_SIZE;
	const slice = rows.slice(0, FEED_PAGE_SIZE);
	const items = await feedItems(db, slice);
	const last = slice[slice.length - 1];
	const next = more && last ? `${feedDate(last)}_${last.id}` : null;
	const showChrome = !before && filter === "all";
	return {
		items,
		next,
		filter: filt.key,
		original,
		ticker: await tickerItems(db),
		board: await boardPayload(db),
		highlights: showChrome ? await highlightsOf(db) : {
			welcome: null,
			pins: []
		}
	};
}
function listSubnav(tkey, extra) {
	const cat = HW_CAT[tkey];
	if (cat) {
		const cats = HW_CATEGORIES.filter((c) => c.tab === cat.tab);
		if (cat.tab === "hardware") {
			const groups = [];
			for (const c of cats) {
				const g = c.group || "Other";
				if (!groups.includes(g)) groups.push(g);
			}
			const cur = cat.group || "Other";
			const firstOf = (g) => cats.find((c) => (c.group || "Other") === g).key;
			return {
				subnav: groups.map((g) => ({
					href: `/t/${firstOf(g)}`,
					label: g,
					on: g === cur
				})),
				subnav2: cats.filter((c) => (c.group || "Other") === cur).map((c) => ({
					href: `/t/${c.key}`,
					label: c.plural,
					on: c.key === tkey
				}))
			};
		}
		return { subnav: cats.map((c) => ({
			href: `/t/${c.key}`,
			label: c.plural,
			on: c.key === tkey
		})) };
	}
	if (tkey === "event") {
		const { up = 0, past = 0 } = extra?.eventCounts || {};
		const when = extra?.when || "upcoming";
		return { subnav: [{
			href: "/t/event",
			label: "Upcoming",
			on: when !== "past",
			count: up
		}, {
			href: "/t/event?when=past",
			label: "Past",
			on: when === "past",
			count: past
		}] };
	}
	if (tkey === "benchmark") return { subnav: [{
		href: "/t/model",
		label: "Models",
		on: false
	}, {
		href: "/t/benchmark",
		label: "Benchmarks",
		on: true
	}] };
	if (tkey === "model") return {};
	if (tkey === "software" || tkey.startsWith("software:")) {
		const kind = tkey.startsWith("software:") ? tkey.slice(9) : "";
		return { subnav: SOFTWARE_KINDS.map((k) => ({
			href: `/t/software/${k.key}`,
			label: k.label,
			on: kind === k.key
		})) };
	}
	if ([
		"funding",
		"deployment",
		"paper",
		"timeline"
	].includes(tkey)) return { subnav: ACTIVITY_SUBNAV.map((s) => ({
		href: s.href,
		label: s.label,
		on: s.key === tkey
	})) };
	return {};
}
function facetValues(t, rec, links, makerCountry) {
	const fdata = { name: rec.name };
	const cols = (t.columns || []).filter((c) => c.startsWith("rel:") && t.rmap[c.slice(4)] || t.fmap[c]);
	for (const fk of [...t.facets || [], ...cols]) if (fk.startsWith("rel:")) fdata[fk] = (links[fk.slice(4)] || []).map((x) => x.name);
	else if (fk === "maker_country") fdata[fk] = makerCountry || "";
	else if (t.fmap[fk]) fdata[fk] = fieldVal(rec.data, fk);
	return fdata;
}
function buildFacets(t, recs) {
	const out = [];
	for (const fk of t.facets || []) {
		let label = fk, kind = "multi";
		if (fk.startsWith("rel:")) {
			const rel = t.rmap[fk.slice(4)];
			if (!rel) continue;
			label = rel.label;
		} else if (fk === "maker_country") label = "Maker origin";
		else {
			const f = t.fmap[fk];
			if (!f) continue;
			label = f.label;
			kind = f.kind === "number" || f.kind === "year" ? f.kind : "multi";
		}
		if (kind === "number" || kind === "year") {
			out.push({
				key: fk,
				label,
				kind
			});
			continue;
		}
		const counts = /* @__PURE__ */ new Map();
		for (const row of recs) {
			let vals = [];
			if (fk.startsWith("rel:")) vals = (row.links[fk.slice(4)] || []).map((x) => x.name);
			else if (fk === "maker_country") vals = row.makerCountry ? [row.makerCountry] : [];
			else {
				const v = fieldVal(row.rec.data, fk);
				vals = Array.isArray(v) ? v.map(String) : v != null && v !== "" ? [String(v)] : [];
			}
			for (const v of vals) counts.set(v, (counts.get(v) || 0) + 1);
		}
		if (!counts.size) continue;
		const options = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], void 0, { sensitivity: "base" })).map(([value, n]) => ({
			value,
			n
		}));
		const long = options.length > 8;
		out.push({
			key: fk,
			label,
			kind,
			options,
			long
		});
	}
	return out;
}
function evRow(r, orgs) {
	const [a] = evDates(r);
	return {
		slug: r.slug,
		name: r.name,
		summary: r.summary,
		href: `/r/${r.slug}`,
		month: monthYear(a),
		date: evDayPart(r),
		place: placeText(r),
		orgs,
		countdown: evState(r) === "Ended" ? "" : countdown(r),
		state: evState(r)
	};
}
async function listPayload(db, tkey, kind = "", when = "", before = "") {
	if (tkey === "event") {
		const recs = await allPublic(db, "SELECT * FROM records WHERE type = 'event' AND private = 0");
		const links = await linksFor(db, recs.map((r) => r.id));
		const up = recs.filter((r) => evState(r) !== "Ended").sort((a, b) => {
			const da = evDates(a)[0]?.toISOString() || "9999";
			const db_ = evDates(b)[0]?.toISOString() || "9999";
			return da.localeCompare(db_) || a.name.localeCompare(b.name);
		});
		const past = recs.filter((r) => evState(r) === "Ended").sort((a, b) => (evDates(b)[0]?.toISOString() || "").localeCompare(evDates(a)[0]?.toISOString() || ""));
		const rows = (when === "past" ? past : up).map((r) => evRow(r, (links.outgoing.get(r.id)?.organisers || []).map((x) => x.name).join(", ")));
		return {
			key: "event",
			label: "Event",
			plural: "Events",
			section: "Events",
			view: "events",
			items: [],
			events: {
				upcoming: when === "past" ? [] : rows,
				past: when === "past" ? rows : []
			},
			when: when === "past" ? "past" : "upcoming",
			...listSubnav("event", {
				eventCounts: {
					up: up.length,
					past: past.length
				},
				when
			})
		};
	}
	if (tkey === "software") {
		const recs = await allPublic(db, "SELECT * FROM records WHERE type = 'software' AND private = 0 ORDER BY name COLLATE NOCASE");
		const sk = SOFTWARE_KINDS.find((k) => k.key === kind);
		const filtered = kind ? recs.filter((r) => {
			const k = fieldStr(r.data, "kind").toLowerCase();
			return k.replace(/\s+/g, "") === kind || k === (sk?.label || "").toLowerCase();
		}) : recs;
		return tableList(db, "software", kind ? `software:${kind}` : "software", sk?.label || "Software", "Software", "Software", filtered);
	}
	const hw = HW_CAT[tkey];
	const typeKey = hw ? "product" : tkey;
	if (!hw && !TYPE_LABELS[typeKey] && !VIEWS[tkey]) return { error: "Unknown list" };
	if ((typeKey === "post" || typeKey === "paper") && !hw) return feedTypeList(db, typeKey, before);
	const recs0 = await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0 ORDER BY name COLLATE NOCASE", typeKey);
	const recs = hw ? recs0.filter((r) => categoryKey(r) === tkey) : recs0;
	const t = viewFor(hw ? tkey : typeKey);
	const info = hw ? {
		label: hw.label,
		plural: hw.plural,
		section: hw.tab === "robots" ? "Robots" : "Hardware"
	} : {
		label: TYPE_LABELS[typeKey]?.label || t?.label || tkey,
		plural: TYPE_LABELS[typeKey]?.plural || t?.plural || tkey,
		section: TYPE_LABELS[typeKey]?.section || ""
	};
	if (hw) return hwList(db, tkey, info, recs, t);
	return tableList(db, typeKey, tkey, info.label, info.plural, info.section, recs, t);
}
async function hwList(db, tkey, info, recs, t) {
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const makers = await allByIds(db, recs.flatMap((r) => (outgoing.get(r.id)?.maker || []).map((x) => x.id)));
	const bundled = recs.map((rec) => {
		const links = outgoing.get(rec.id) || {};
		const makerHit = (links.maker || [])[0];
		const maker = makerHit ? makers.get(makerHit.id) : void 0;
		return {
			rec,
			links,
			maker,
			makerCountry: maker ? fieldStr(maker.data, "country") : ""
		};
	});
	const tiles = bundled.map(({ rec, links, maker, makerCountry }) => {
		const view = t || viewFor(tkey);
		const stats = (view?.card_specs || HW_CAT[tkey].card_specs || []).slice(0, 4).map((key) => {
			const f = view?.fmap[key];
			const v = fieldVal(rec.data, key);
			if (v == null || v === "") return null;
			return {
				label: shortLabel(f?.label || key),
				value: shortValue(f?.unit || "", v)
			};
		}).filter((x) => !!x);
		const priceField = view?.fmap.price_usd;
		let price = null;
		if (priceField) {
			const v = fieldVal(rec.data, "price_usd");
			if (v == null || v === "") price = fieldStr(rec.data, "for_sale") === "No" ? null : "Price n/a";
			else price = shortValue("USD", v);
		}
		const facets = facetValues(view || {
			facets: [],
			columns: [],
			card_specs: [],
			fmap: {},
			rmap: {},
			fields: []
		}, rec, links, makerCountry);
		return {
			id: rec.id,
			slug: rec.slug,
			name: rec.name,
			card_name: cardName(rec.name, maker?.name),
			status: fieldStr(rec.data, "status"),
			maker: maker ? {
				slug: maker.slug,
				name: maker.name
			} : null,
			type_label: typeLabel(rec),
			category: categoryKey(rec),
			href: `/r/${rec.slug}`,
			ph: phModel(rec, "md"),
			stats,
			price,
			versions: [],
			facets,
			sort: {
				name: rec.name.toLowerCase(),
				...Object.fromEntries(Object.entries(facets).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]))
			},
			cmp_id: String(rec.id)
		};
	});
	const facets = t ? buildFacets(t, bundled) : [];
	const columns = (t?.columns || HW_CAT[tkey].columns || []).map((key) => ({
		key,
		label: t?.fmap[key]?.label || key,
		numeric: t?.fmap[key]?.kind === "number"
	}));
	return {
		key: tkey,
		label: info.label,
		plural: info.plural,
		section: info.section,
		view: "grid",
		items: tiles,
		facets,
		columns,
		...listSubnav(tkey)
	};
}
async function tableList(db, typeKey, tkey, label, plural, section, recs, t) {
	t = t || viewFor(typeKey);
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const devs = await allByIds(db, recs.flatMap((r) => (outgoing.get(r.id)?.developer || outgoing.get(r.id)?.company || []).map((x) => x.id)));
	const bundled = recs.map((rec) => ({
		rec,
		links: outgoing.get(rec.id) || {}
	}));
	const columns = (t?.columns || []).map((key) => ({
		key,
		label: key.startsWith("rel:") ? t.rmap[key.slice(4)]?.label || key : t.fmap[key]?.label || key,
		numeric: t?.fmap[key]?.kind === "number"
	}));
	return {
		key: tkey,
		label,
		plural,
		section,
		view: "table",
		items: bundled.map(({ rec, links }) => {
			const devHit = (links.developer || links.company || [])[0];
			const dev = devHit ? devs.get(devHit.id) : void 0;
			const facets = t ? facetValues(t, rec, links) : { name: rec.name };
			const cells = (t?.columns || []).map((key) => {
				let text = "";
				if (key.startsWith("rel:")) text = (links[key.slice(4)] || []).map((x) => x.name).join(", ");
				else if (key === "name") text = rec.name;
				else text = fmtValue(fieldVal(rec.data, key));
				return {
					key,
					text
				};
			});
			return {
				id: rec.id,
				slug: rec.slug,
				name: rec.name,
				summary: rec.summary,
				href: `/r/${rec.slug}`,
				ph: phModel(rec, "sm", rec.type === "model" ? dev : void 0),
				cells,
				facets,
				sort: {
					name: rec.name.toLowerCase(),
					...Object.fromEntries(Object.entries(facets).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]))
				},
				cmp_id: String(rec.id)
			};
		}),
		facets: t ? buildFacets(t, bundled) : [],
		columns,
		...listSubnav(tkey)
	};
}
async function orgCounts(db, ids) {
	const map = /* @__PURE__ */ new Map();
	if (!ids.length) return map;
	const chunk = 30;
	const results = [];
	for (let i = 0; i < ids.length; i += chunk) {
		const part = ids.slice(i, i + chunk);
		const ph = part.map(() => "?").join(",");
		const res = await db.prepare(`SELECT l.src, l.dst, r.type, l.rel
       FROM links l JOIN records r ON r.id = CASE WHEN l.src IN (${ph}) THEN l.dst ELSE l.src END
       WHERE (l.src IN (${ph}) OR l.dst IN (${ph})) AND r.private = 0`).bind(...part, ...part, ...part).all();
		results.push(...res.results || []);
	}
	for (const raw of results) {
		const r = raw;
		const oid = ids.includes(Number(r.src)) ? Number(r.src) : Number(r.dst);
		const bag = map.get(oid) || {
			hw: 0,
			models: 0,
			sw: 0,
			data: 0,
			papers: 0,
			labs: 0,
			deps: 0,
			rounds: 0
		};
		if (r.type === "product") bag.hw += 1;
		else if (r.type === "model") bag.models += 1;
		else if (r.type === "software") bag.sw += 1;
		else if (r.type === "datapack") bag.data += 1;
		else if (r.type === "paper") bag.papers += 1;
		else if (r.type === "lab") bag.labs += 1;
		else if (r.type === "deployment") bag.deps += 1;
		else if (r.type === "funding") bag.rounds += 1;
		map.set(oid, bag);
	}
	return map;
}
function makesLine(rec, o) {
	const parts = [
		[
			o.hw || 0,
			"robot",
			"robots"
		],
		[
			o.models || 0,
			"model",
			"models"
		],
		[
			o.sw || 0,
			"software product",
			"software products"
		],
		[
			o.data || 0,
			"dataset",
			"datasets"
		],
		[
			o.papers || 0,
			"paper",
			"papers"
		],
		[
			o.labs || 0,
			"research group",
			"research groups"
		],
		[
			o.deps || 0,
			"deployment",
			"deployments"
		],
		[
			o.rounds || 0,
			"funding round",
			"funding rounds"
		]
	];
	return (rec.type === "lab" ? parts.filter((p) => [
		"paper",
		"model",
		"dataset",
		"robot"
	].includes(p[1])) : parts).filter(([n]) => n).map(([n, one, many]) => `${n} ${n === 1 ? one : many}`).join(" · ");
}
function toOrgCard(rec, o, parent) {
	const roles = asStringList(fieldVal(rec.data, "roles"));
	const focus = asStringList(fieldVal(rec.data, "focus"));
	const country = fieldStr(rec.data, "country");
	const raised = fieldVal(rec.data, "raised_usd_m");
	return {
		id: rec.id,
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		summary: rec.summary,
		href: `/r/${rec.slug}`,
		ph: phModel(rec, "av"),
		country,
		focus,
		roles,
		parent: parent ? {
			slug: parent.slug,
			name: parent.name
		} : null,
		makes: makesLine(rec, o),
		out: Object.values(o).reduce((a, b) => a + b, 0),
		products: o.hw || 0,
		raised: raised != null && raised !== "" ? Number(raised) : null,
		founded: fieldStr(rec.data, "founded"),
		updated: rec.updated || ""
	};
}
function locationRows(rec) {
	const raw = fieldVal(rec.data, "locations");
	const rows = Array.isArray(raw) ? raw : [];
	const out = [];
	for (const r of rows) {
		if (!r || typeof r !== "object") continue;
		const address = String(r.address || "").trim();
		if (!address) continue;
		const lat = Number(r.lat);
		const lon = Number(r.lon);
		const ok = Number.isFinite(lat) && Number.isFinite(lon) && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
		out.push({
			kind: String(r.kind || "Office"),
			address,
			lat: ok ? lat : null,
			lon: ok ? lon : null
		});
	}
	out.sort((a, b) => Number(a.kind !== "HQ") - Number(b.kind !== "HQ"));
	return out;
}
async function orgsPayload(db, group = "", asMap = false) {
	const recs = await allPublic(db, `SELECT * FROM records WHERE type IN (${ORG_TYPES.map(() => "?").join(",")}) AND private = 0 ORDER BY id`, ...ORG_TYPES);
	const counts = await orgCounts(db, recs.map((r) => r.id));
	const cards = recs.map((r) => toOrgCard(r, counts.get(r.id) || {}));
	const byRole = (roles) => cards.filter((c) => c.roles.some((r) => roles.includes(r)));
	const groups = ORG_GROUPS.map((g) => {
		const items = byRole(g.roles).slice().sort((a, b) => b.out - a.out || a.name.localeCompare(b.name));
		return {
			key: g.key,
			label: g.label,
			blurb: g.blurb,
			count: items.length,
			items: group && group !== g.key ? items : group === g.key ? items : items.slice(0, 6)
		};
	}).filter((g) => g.count > 0);
	const inAny = new Set(ORG_GROUPS.flatMap((g) => byRole(g.roles).map((c) => c.id)));
	const other = cards.filter((c) => !inAny.has(c.id));
	const countries = [...new Set(cards.map((c) => c.country).filter(Boolean))].sort();
	const payload = {
		total: cards.length,
		group: group || void 0,
		groups: group && group !== "map" ? groups.filter((g) => g.key === group) : groups,
		other: group && group !== "map" ? [] : other,
		countries,
		map: asMap || group === "map"
	};
	if (payload.map) {
		const order = recs.map((r) => r.id);
		const points = [];
		for (const rec of recs) {
			const rows = locationRows(rec).filter((r) => r.lat != null);
			if (!rows.length) continue;
			const focus = asStringList(fieldVal(rec.data, "focus"));
			const roles = asStringList(fieldVal(rec.data, "roles"));
			const groups = ORG_GROUPS.filter((g) => roles.some((r) => g.roles.includes(r))).map((g) => g.key).join("|");
			const idx = order.indexOf(rec.id);
			const lgImg = imageSrc(rec.data);
			const lg = lgImg && rec.data && rec.data.image && typeof rec.data.image === "object" && rec.data.image.fit === "contain" ? lgImg.src : null;
			rows.forEach((r, i) => {
				points.push({
					id: rec.id,
					n: rec.name,
					s: rec.slug,
					c: orgColor(idx < 0 ? rec.id : idx, ORG_COLOR_PALETTE),
					k: r.kind,
					lg,
					a: r.address,
					lat: r.lat,
					lon: r.lon,
					t: rec.type,
					i,
					d: {
						name: rec.name.toLowerCase(),
						country: fieldStr(rec.data, "country"),
						focus: focus.join("|"),
						parent: "",
						slug: rec.slug,
						groups
					}
				});
			});
		}
		payload.points = points;
		payload.tiles = MAP_TILES;
		payload.missing = recs.length - new Set(points.map((p) => p.id)).size;
	}
	if (group && group !== "map") {
		const gdef = ORG_GROUPS.find((g) => g.key === group);
		if (gdef) {
			const items = byRole(gdef.roles).slice().sort((a, b) => b.out - a.out || a.name.localeCompare(b.name));
			payload.groups = [{
				key: gdef.key,
				label: gdef.label,
				blurb: gdef.blurb,
				count: items.length,
				items
			}];
		}
	}
	return payload;
}
async function searchHits(db, q, limit = 24, types) {
	q = q.trim();
	const toks = q.toLowerCase().match(/\w+/gu) || [];
	if (!q || !toks.length) return [];
	limit = Math.min(limit, 200);
	const match = toks.map((t) => `{name summary body extra} : "${t.replace(/"/g, "")}"*`).join(" AND ");
	let recs = [];
	const loadHits = async (bind) => {
		const { results } = await db.prepare(`SELECT r.* FROM fts JOIN records r ON r.id = fts.rowid
       WHERE fts MATCH ? AND r.private = 0
       ORDER BY bm25(fts, 10.0, 4.0, 1.0, 2.0, 1.0) LIMIT 200`).bind(bind).all();
		return (results || []).map((r) => loadRow(r));
	};
	try {
		recs = await loadHits(match);
	} catch {
		try {
			recs = await loadHits(toks.join(" AND "));
		} catch {
			const like = `%${q.replace(/%/g, "")}%`;
			recs = await allPublic(db, `SELECT * FROM records WHERE private = 0 AND (name LIKE ? OR summary LIKE ? OR body LIKE ? OR data LIKE ?) ORDER BY name COLLATE NOCASE LIMIT 200`, like, like, like, like);
		}
	}
	const markSnip = (text) => {
		let t = text || "";
		for (const tok of toks) t = t.replace(new RegExp(`(${tok})`, "ig"), "$1");
		return t;
	};
	for (const r of recs) r.snip = markSnip([
		r.summary,
		r.body || "",
		r.name
	].find((s) => toks.some((tok) => s.toLowerCase().includes(tok))) || r.summary || r.name).slice(0, 280);
	if (types?.length) recs = recs.filter((r) => types.includes(r.type));
	const ql = q.toLowerCase().trim();
	const order = Object.keys(TYPE_LABELS);
	recs.sort((a, b) => {
		const ae = Number(a.name.toLowerCase() !== ql) - Number(b.name.toLowerCase() !== ql);
		if (ae) return ae;
		const as_ = Number(!a.name.toLowerCase().startsWith(ql)) - Number(!b.name.toLowerCase().startsWith(ql));
		if (as_) return as_;
		return (order.indexOf(a.type) === -1 ? 99 : order.indexOf(a.type)) - (order.indexOf(b.type) === -1 ? 99 : order.indexOf(b.type));
	});
	recs = recs.slice(0, limit);
	const devIds = [];
	const { outgoing } = await linksFor(db, recs.filter((r) => r.type === "model").map((r) => r.id));
	for (const r of recs) if (r.type === "model") {
		const d = (outgoing.get(r.id)?.developer || [])[0];
		if (d) devIds.push(d.id);
	}
	const devs = await allByIds(db, devIds);
	return recs.map((r) => {
		const typ = TYPE_LABELS[r.type] || {
			label: r.type,
			plural: r.type
		};
		const dev = r.type === "model" ? devs.get((outgoing.get(r.id)?.developer || [])[0]?.id) : void 0;
		return {
			id: r.id,
			name: r.name,
			slug: r.slug,
			type: r.type,
			type_label: typ.label,
			plural: typ.plural,
			summary: r.summary,
			snip: r.snip,
			ph: phModel(r, "sm", dev)
		};
	});
}
var SEARCH_HEADINGS = {
	company: "Organisations",
	product: "Robots and hardware",
	model: "Models",
	software: "Software",
	event: "Events",
	post: "Posts",
	paper: "Papers",
	funding: "Funding",
	deployment: "Deployments"
};
function groupSearch(q, hits) {
	const groupsMap = /* @__PURE__ */ new Map();
	for (const h of hits) {
		const list = groupsMap.get(h.type) || [];
		list.push(h);
		groupsMap.set(h.type, list);
	}
	const order = Object.keys(TYPE_LABELS);
	const groups = [...groupsMap.entries()].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])).map(([type, items]) => ({
		type,
		plural: TYPE_LABELS[type]?.plural || type,
		heading: SEARCH_HEADINGS[type] || TYPE_LABELS[type]?.plural || type,
		items
	}));
	return {
		q,
		total: hits.length,
		groups
	};
}
async function pageDoc(db, key) {
	const d = {
		about: {
			title: "About",
			md: ABOUT_MD,
			setting: "about_md",
			description: "What embodiment.place is: an independent research tracker and database for humanoid robotics."
		},
		privacy: {
			title: "Privacy",
			md: PRIVACY_MD,
			setting: "legal_privacy",
			description: "Privacy for embodiment.place."
		},
		terms: {
			title: "Terms",
			md: TERMS_MD,
			setting: "legal_terms",
			description: "Terms for embodiment.place."
		},
		contact: {
			title: "Contact",
			md: CONTACT_MD,
			setting: "legal_contact",
			description: "Contact for embodiment.place."
		}
	}[key];
	if (!d) return null;
	const html = md(fillLegal(await setting(db, d.setting) || d.md, CONTACT_EMAIL, 14, LEGAL_UPDATED));
	return {
		key,
		title: d.title,
		html,
		description: d.description
	};
}
function formatField(f, v) {
	if (v == null || v === "") return "";
	if (Array.isArray(v)) return v.map(String).join(", ");
	if (f.unit === "USD" || f.key === "price_usd") {
		const n = Number(v);
		if (!Number.isFinite(n)) return String(v);
		return "$" + n.toLocaleString("en-US");
	}
	if (f.kind === "number" || typeof v === "number") {
		const n = Number(v);
		const num = Number.isInteger(n) ? String(n) : String(n);
		return f.unit ? `${num} ${f.unit}` : num;
	}
	return String(v);
}
function slugify(s) {
	return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function versionsOf(rec) {
	const raw = fieldVal(rec.data, "versions");
	return (Array.isArray(raw) ? raw : []).filter((r) => r && typeof r === "object" && r.name);
}
function findVersion(rec, slug) {
	const vs = versionsOf(rec);
	if (!vs.length) return null;
	return vs.find((v) => slugify(v.name) === slug) || vs[0];
}
function betterWay(f) {
	const k = f.key.toLowerCase();
	if (/height|length|width|depth|size/.test(k)) return "none";
	if (/weight|mass|price|cost|latency|repeatability/.test(k)) return "lower";
	return "higher";
}
function ordinal(n) {
	const v = n % 100;
	return n + (v >= 11 && v <= 13 ? "th" : {
		1: "st",
		2: "nd",
		3: "rd"
	}[n % 10] || "th");
}
async function computeSpecRanks(db, rec) {
	const tkey = categoryKey(rec) || rec.type;
	const nums = ((viewFor(tkey) || viewFor(rec.type))?.fields || []).filter((f) => f.kind === "number" && f.group !== "image" && f.group !== "ordering" && f.group !== "models");
	if (!nums.length) return {};
	const peers = (await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0", rec.type)).filter((r) => (categoryKey(r) || r.type) === tkey);
	const out = {};
	for (const f of nums) {
		const vals = peers.map((r) => Number(fieldVal(r.data, f.key))).filter((n) => Number.isFinite(n));
		const me = Number(fieldVal(rec.data, f.key));
		if (!Number.isFinite(me) || vals.length < 3) continue;
		const way = betterWay(f);
		const lower = way === "lower";
		const rnk = vals.filter((v) => lower ? v < me : v > me).length + 1;
		const fill = vals.filter((v) => lower ? v >= me : v <= me).length / vals.length;
		const n = vals.length;
		let lab = "", best = false;
		if (way === "none") lab = rnk === 1 ? `Highest of ${n}` : rnk === n ? `Lowest of ${n}` : `${ordinal(rnk)} highest of ${n}`;
		else if (rnk === 1) {
			lab = `Best of ${n}`;
			best = true;
		} else if (n >= 10 && rnk / n <= .25) lab = `Top ${Math.max(1, Math.ceil(rnk / n * 100))}% of ${n}`;
		else lab = `${ordinal(rnk)} of ${n}`;
		out[f.key] = {
			fill,
			lab,
			best
		};
	}
	return out;
}
async function comparePayload(db, idsRaw) {
	const rawIds = idsRaw.split(",").map((x) => x.trim()).filter((x) => /^\d+/.test(x.split("~")[0])).slice(0, 8);
	const recs = [];
	const keys = [];
	const vers = [];
	for (const x of rawIds) {
		const [idStr, vslug] = x.split("~");
		const id = Number(idStr);
		const r = (await allByIds(db, [id])).get(id);
		if (!r) continue;
		const v = vslug ? findVersion(r, vslug) : null;
		const key = v ? `${r.id}~${slugify(v.name)}` : String(r.id);
		if (keys.includes(key)) continue;
		recs.push(r);
		keys.push(key);
		vers.push(v);
	}
	if (!recs.length) return {
		error: "Not found",
		status: 404
	};
	const tkey = categoryKey(recs[0]) || recs[0].type;
	const t = viewFor(tkey) || viewFor(recs[0].type);
	const plural = HW_CAT[tkey]?.plural || TYPE_LABELS[recs[0].type]?.plural || "records";
	const sameType = recs[0].type;
	const all = await allPublic(db, "SELECT * FROM records WHERE type = ? AND private = 0 ORDER BY name COLLATE NOCASE", sameType);
	const add = [];
	for (const r of all) {
		if ((categoryKey(r) || r.type) !== tkey) continue;
		const vs = versionsOf(r);
		for (const v of vs.length ? vs : [null]) {
			const k = v ? `${r.id}~${slugify(v.name)}` : String(r.id);
			if (!keys.includes(k)) add.push({
				id: k,
				name: v && v.name !== r.name ? `${r.name} · ${v.name}` : r.name
			});
		}
	}
	const dataOf = (r, v) => {
		if (!v) return r.data;
		const data = {
			...r.data,
			...v.specs || {}
		};
		if (v.price != null) data.price_usd = { v: v.price };
		return data;
	};
	const rows = [];
	const { outgoing } = await linksFor(db, recs.map((r) => r.id));
	const makerCells = recs.map((r) => {
		return {
			text: (outgoing.get(r.id)?.maker || outgoing.get(r.id)?.developer || [])[0]?.name || "–",
			best: false
		};
	});
	if (makerCells.some((c) => c.text !== "–")) rows.push({
		label: "Maker",
		diff: new Set(makerCells.map((c) => c.text)).size > 1,
		cells: makerCells
	});
	for (const f of t?.fields || []) {
		if (f.private || [
			"image",
			"gallery",
			"models",
			"versions",
			"options"
		].includes(f.kind) || [
			"image",
			"ordering",
			"models"
		].includes(f.group || "")) continue;
		const vals = recs.map((r, i) => fieldVal(dataOf(r, vers[i]), f.key));
		if (vals.every((v) => v == null || v === "" || Array.isArray(v) && !v.length)) continue;
		const diff = new Set(vals.map((v) => JSON.stringify(v))).size > 1;
		let best = null;
		if (f.kind === "number") {
			const nums = vals.map(Number).filter((n) => Number.isFinite(n));
			const way = betterWay(f);
			if (nums.length > 1 && way !== "none") best = way === "lower" ? Math.min(...nums) : Math.max(...nums);
		}
		rows.push({
			label: f.label,
			diff,
			cells: vals.map((v) => ({
				text: formatField(f, v),
				best: best != null && typeof v === "number" && Number(v) === best
			}))
		});
	}
	const sub = listSubnav(tkey).subnav;
	return {
		title: `Compare ${plural.toLowerCase()}`,
		tkey,
		keys,
		subnav: sub,
		columns: recs.map((r, i) => ({
			key: keys[i],
			name: r.name,
			href: `/r/${r.slug}` + (vers[i] ? `?v=${slugify(vers[i].name)}` : ""),
			ph: phModel(r, "md"),
			version: vers[i] && vers[i].name !== r.name ? vers[i].name : void 0
		})),
		rows,
		add
	};
}
function galleryFor(rec, videoUrl = "", videoCredit = "") {
	const items = [];
	const img = imageSrc(rec.data);
	if (img) items.push({
		k: "img",
		u: img.src,
		c: "",
		s: img.from || ""
	});
	for (const g of galleryItems(rec.data)) if (g.url !== img?.src) items.push({
		k: "img",
		u: g.url,
		c: g.credit || "",
		s: g.src || ""
	});
	const vi = videoUrl ? videoThumb(videoUrl) : null;
	if (vi) items.push({
		k: "vid",
		u: vi.embed,
		c: videoCredit || vi.srcLabel,
		s: vi.url,
		t: vi.thumb
	});
	return items;
}
async function feedTypeList(db, typeKey, before) {
	const { rows, next } = await feedPage(db, {
		types: [typeKey],
		before,
		limit: FEED_PAGE_SIZE
	});
	const items = await feedItems(db, rows);
	const info = TYPE_LABELS[typeKey] || {
		label: typeKey,
		plural: typeKey,
		section: ""
	};
	return {
		key: typeKey,
		label: info.label,
		plural: info.plural,
		section: info.section || (typeKey === "post" ? "Blog" : "Research"),
		view: "feed",
		items: [],
		feed: items,
		next,
		...listSubnav(typeKey)
	};
}
// backend/worker/src/highlights.ts
async function welcomeOf(db) {
	try {
		const w = JSON.parse(await setting$1(db, "home_welcome") || "{}");
		return {
			on: Boolean(w.on),
			title: String(w.title || ""),
			text: String(w.text || ""),
			btn_label: String(w.btn_label || ""),
			btn_url: String(w.btn_url || ""),
			ver: Number(w.ver || 0)
		};
	} catch {
		return {
			on: false,
			title: "",
			text: "",
			btn_label: "",
			btn_url: "",
			ver: 0
		};
	}
}
async function pinIds(db) {
	try {
		return JSON.parse(await setting$1(db, "home_pins") || "[]").map(Number).filter((n) => n > 0).slice(0, 4);
	} catch {
		return [];
	}
}
async function homeAdminPayload(c) {
	const db = c.env.DB;
	const w = await welcomeOf(db);
	const ids = await pinIds(db);
	const pins = [];
	for (const id of ids) {
		const row = await db.prepare("SELECT * FROM records WHERE id=?").bind(id).first();
		if (row) {
			const r = loadRow(row);
			pins.push({
				id: r.id,
				slug: r.slug,
				name: r.name,
				type: r.type,
				summary: r.summary
			});
		}
	}
	return {
		welcome: w,
		pins,
		max: 4
	};
}
async function postHomeAdmin(c) {
	if (!can(c.get("auth"), "home")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const act = g("action") || "welcome";
	if (act === "welcome") {
		const prev = await welcomeOf(c.env.DB);
		const w = {
			on: g("on") === "1" || g("on") === "on",
			title: g("title").slice(0, 200),
			text: g("text").slice(0, 4e3),
			btn_label: g("btn_label").slice(0, 80),
			btn_url: g("btn_url").slice(0, 300),
			ver: (prev.ver || 0) + 1
		};
		await setSetting(c.env.DB, "home_welcome", JSON.stringify(w));
	}
	if (act === "pins") {
		const ids = (all.pin || all.pins || []).map(Number).filter((n) => n > 0).slice(0, 4);
		const add = Number(g("add") || 0);
		let next = ids;
		if (add) next = [add, ...ids.filter((x) => x !== add)].slice(0, 4);
		await setSetting(c.env.DB, "home_pins", JSON.stringify(next));
	}
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		...await homeAdminPayload(c),
		next: "/admin/home"
	});
	return c.redirect("/admin/home?saved=1");
}
async function postPin(c, slug) {
	if (!can(c.get("auth"), "home")) return c.json({ error: "Not found" }, 404);
	const row = await c.env.DB.prepare("SELECT id FROM records WHERE slug=?").bind(slug).first();
	if (row) {
		const ids = await pinIds(c.env.DB);
		const next = ids.includes(row.id) ? ids.filter((x) => x !== row.id) : [row.id, ...ids].slice(0, 4);
		await setSetting(c.env.DB, "home_pins", JSON.stringify(next));
	}
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/r/" + slug
	});
	return c.redirect("/r/" + slug);
}
// backend/worker/src/quotes.ts
var QUOTE_IP = new Limiter(5, 3600);
var QUOTE_GAP = new Limiter(1, 30);
function orderMode(rec) {
	if (fieldStr(rec.data, "for_sale") === "No" || fieldStr(rec.data, "order_mode") === "No button") return "";
	if (!fieldStr(rec.data, "for_sale") && (fieldStr(rec.data, "availability") === "Not for sale" || fieldStr(rec.data, "status") === "Discontinued")) return "";
	return [
		"humanoid",
		"gripper",
		"actuator",
		"sensor",
		"compute",
		"solution",
		"product"
	].includes(rec.type) || Boolean(fieldVal(rec.data, "category") || fieldVal(rec.data, "kind")) || rec.type === "product" ? "quote" : "quote";
}
async function postQuote(c, slug) {
	await ensureExtraSchema(c.env.DB);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	const rec = loadRow(row);
	if (rec.private && !c.get("auth").see_private) return c.json({ error: "Not found" }, 404);
	if (orderMode(rec) !== "quote") return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k, n = 200) => ((all[k] || [""]).slice(-1)[0] || "").trim().slice(0, n);
	const back = `/r/${rec.slug}`;
	if (g("website")) return c.redirect(back + "?quote=sent");
	if (!(g("name") && g("email").includes("@") && g("org") && g("consent"))) return c.redirect(back + "?quote=missing#order");
	const ip = c.get("auth").ip || "0";
	if (QUOTE_IP.blocked(ip) || QUOTE_GAP.blocked("gap:" + ip)) return c.redirect(back + "?quote=wait#order");
	QUOTE_IP.hit(ip);
	QUOTE_GAP.hit("gap:" + ip);
	if (!c.get("auth").logged && !await turnstileOk(c.env, g("cf-turnstile-response"), c.get("auth").ip)) return c.redirect(back + "?quote=check#order");
	let qty = 1;
	try {
		qty = Math.max(1, Math.min(1e4, parseInt(g("qty") || "1", 10) || 1));
	} catch {
		qty = 1;
	}
	const ref = "Q-" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "") + "-" + token(2).toUpperCase();
	const payload = {
		name: g("name", 120),
		email: g("email"),
		org: g("org", 160),
		country: g("country", 80),
		message: g("message", 2e3),
		use: g("use"),
		timing: g("timing"),
		model: g("model", 60),
		qty,
		options: all.opt || [],
		user_id: c.get("auth").user?.id || null
	};
	await c.env.DB.prepare("INSERT INTO referrals(record_id,user_id,ref,payload,status,created,updated) VALUES(?,?,?,?, 'new', ?, ?)").bind(rec.id, c.get("auth").user?.id || null, ref, JSON.stringify(payload), nowStamp(), nowStamp()).run();
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		ref,
		next: back + "?quote=sent#order"
	});
	return c.redirect(back + "?quote=sent#order");
}
async function requestsAdminPayload(c) {
	const st = c.req.query("status") || "new";
	const auth = c.get("auth");
	if (!auth.is_admin && !can(auth, "review")) {}
	const { results } = await c.env.DB.prepare("SELECT r.*, rec.name AS product, rec.slug AS slug FROM referrals r LEFT JOIN records rec ON rec.id=r.record_id ORDER BY r.id DESC LIMIT 400").all();
	return {
		status: st,
		items: (results || []).map((raw) => {
			const r = raw;
			let p = {};
			try {
				p = JSON.parse(String(r.payload || "{}"));
			} catch {}
			return {
				id: Number(r.id),
				ref: String(r.ref || ""),
				status: String(r.status || "new"),
				created: String(r.created || ""),
				product: String(r.product || ""),
				slug: String(r.slug || ""),
				payload: p,
				note: String(r.note || "")
			};
		}).filter((x) => st === "all" || (st === "open" ? !["won", "closed"].includes(x.status) : x.status === st || st === "new" && x.status === "new")),
		statuses: QUOTE_STATUSES,
		uses: QUOTE_USES,
		timing: QUOTE_TIMING
	};
}
async function postRequestsAdmin(c) {
	if (!c.get("auth").is_admin && !can(c.get("auth"), "review")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const id = Number(g("id") || 0);
	const status = QUOTE_STATUSES.some(([k]) => k === g("status")) ? g("status") : "";
	if (id && status) await c.env.DB.prepare("UPDATE referrals SET status=?, note=?, updated=? WHERE id=?").bind(status, g("note").slice(0, 500), nowStamp(), id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/requests"
	});
	return c.redirect("/admin/requests");
}
// backend/worker/src/watchlist.ts
function needUser(c) {
	if (!c.get("auth").user) return c.redirect("/login?next=" + encodeURIComponent(new URL(c.req.url).pathname));
	return null;
}
// Members follow organisations and topics only (Julian, 2026-11-19). Older person and record rows stay in the database
// but are ignored, so they come back if this is ever reversed.
async function wlSources(db, uid) {
	await ensureExtraSchema(db);
	return {
		people: [],
		orgs: await allPublic(db, "SELECT r.* FROM follows f JOIN records r ON r.id=f.company_id WHERE f.user_id=? ORDER BY r.name COLLATE NOCASE", uid),
		records: [],
		topics: ((await db.prepare("SELECT ref FROM watch_sources WHERE user_id=? AND kind='tag' ORDER BY ref COLLATE NOCASE").bind(uid).all()).results || []).map((r) => String(r.ref))
	};
}
function wlOrder(prefs) {
	const valid = WL_SECTIONS.map((s) => s[0]);
	return {
		order: [...(prefs.sections || []).filter((k) => valid.includes(k)), ...WL_DEFAULT.filter((k) => !(prefs.sections || []).includes(k))],
		hidden: new Set(prefs.hidden || [])
	};
}
async function watchlistPayload(c, days = 30) {
	const denied = needUser(c);
	if (denied) return denied;
	const u = c.get("auth").user;
	const src = await wlSources(c.env.DB, u.id);
	const { order, hidden } = wlOrder(prefsOf(u));
	if (!src.orgs.length) return {
		tab: "feed",
		empty: true,
		days,
		digest: epDigestInfo(u),
		suggest: await epWatchSuggest(c.env.DB, u.id, src),
		sources: src,
		order,
		hidden: [...hidden],
		sections: WL_SECTIONS,
		items: {}
	};
	const since = (/* @__PURE__ */ new Date(Date.now() - days * 864e5)).toISOString().slice(0, 10);
	const pids = new Set(src.people.map((p) => p.id));
	const oids = new Set(src.orgs.map((o) => o.id));
	const rids = new Set(src.records.map((r) => r.id));
	const topics = src.topics.map((t) => t.toLowerCase());
	const rows = await allPublic(c.env.DB, "SELECT * FROM records WHERE type IN ('post','paper') AND (private=0 OR ?) AND (created>=? OR updated>=? OR COALESCE(feed_at,'')>=?) ORDER BY COALESCE(feed_at, substr(created,1,10),'') DESC, id DESC LIMIT 400", c.get("auth").see_private ? 1 : 0, since, since, since);
	const { outgoing } = await linksFor(c.env.DB, rows.map((r) => r.id));
	const out = {};
	for (const k of order) if (!hidden.has(k)) out[k] = [];
	const linked = (rid, ids) => {
		const m = outgoing.get(rid) || {};
		return Object.values(m).some((hits) => hits.some((h) => ids.has(h.id)));
	};
	const topical = (r) => {
		if (!topics.length) return false;
		const tags = (fieldVal(r.data, "tags") || []).map((t) => String(t).toLowerCase());
		const text = (r.name + " " + (r.summary || "")).toLowerCase();
		return topics.some((t) => tags.includes(t) || text.includes(t));
	};
	for (const r of rows) {
		const byPerson = pids.has(Number(r.author_id || 0)) && (r.type === "post" || r.type === "paper");
		const byOrg = linked(r.id, oids);
		const onTopic = linked(r.id, rids) || topical(r);
		if (!(byPerson || byOrg || onTopic)) continue;
		const isVideo = r.type === "post" && Boolean(fieldStr(r.data, "video"));
		const rules = {
			companies: byOrg && r.type !== "job" && r.type !== "paper" && !isVideo,
			research: byOrg && r.type === "paper",
			videos: byOrg && isVideo,
			topics: onTopic,
		};
		for (const k of order) if (out[k] && rules[k]) {
			out[k].push(r);
			break;
		}
	}
	const items = {};
	for (const [k, recs] of Object.entries(out)) items[k] = await feedItems(c.env.DB, recs.slice(0, 12));
	return {
		tab: "feed",
		empty: false,
		days,
		digest: epDigestInfo(u),
		sources: src,
		order,
		hidden: [...hidden],
		sections: WL_SECTIONS,
		items
	};
}
// epWatch: one-tap watching from anywhere (org cards, map pins, suggestions, Sources search), keyed by record slug.
const EP_WL_TOPICS = ["humanoid", "VLA", "dexterous hands", "tactile", "warehouse", "home robot", "foundation model", "teleoperation"];
async function epWatchedSlugs(db, uid) {
	await ensureExtraSchema(db);
	const { results } = await db.prepare("SELECT r.slug FROM follows f JOIN records r ON r.id=f.company_id WHERE f.user_id=?").bind(uid).all();
	return (results || []).map((r) => String(r.slug));
}
function epSuggestCard(r) {
	return { id: r.id, slug: r.slug, name: r.name, type: r.type, type_label: TYPE_LABELS[r.type]?.label || r.type, summary: String(r.summary || "").slice(0, 120), ph: phModel(r, "av") };
}
async function epWatchSuggest(db, uid, src) {
	const have = new Set(await epWatchedSlugs(db, uid));
	const topics = new Set((src?.topics || []).map((t) => t.toLowerCase()));
	const ranked = (types, n) => allPublic(db, `SELECT r.*, (SELECT COUNT(*) FROM links l WHERE l.src=r.id OR l.dst=r.id) AS ep_n FROM records r WHERE r.type IN (SELECT value FROM json_each(?)) AND r.private=0 AND COALESCE(r.demo,0)=0 ORDER BY ep_n DESC, r.name COLLATE NOCASE LIMIT ?`, JSON.stringify(types), n + 30);
	const orgs = (await ranked(ORG_TYPES_LIST, 12)).filter((r) => !have.has(r.slug)).slice(0, 12).map(epSuggestCard);
	return { orgs, robots: [], topics: EP_WL_TOPICS.filter((t) => !topics.has(t.toLowerCase())) };
}
// epWatchFind: organisation search for Watchlist Sources, returned as follow tiles.
async function epWatchFind(c) {
	const q = String(c.req.query("q") || "").trim();
	if (q.length < 2) return c.json([]);
	const hits = await searchHits(c.env.DB, q, 12, ORG_TYPES_LIST);
	const rows = await allByIds(c.env.DB, hits.map((h) => h.id));
	return c.json(hits.map((h) => rows.get(h.id)).filter((r) => r && !Number(r.private || 0)).map(epSuggestCard));
}
async function epWatchIds(c) {
	const u = c.get("auth").user;
	if (!u) return c.json({ slugs: [], user: false });
	return c.json({ slugs: await epWatchedSlugs(c.env.DB, u.id), user: true });
}
async function epWatchToggle(c) {
	const u = c.get("auth").user;
	if (!u) return c.json({ error: "Log in to watch things." }, 401);
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const slug = String((all.slug || [""]).slice(-1)[0] || "").trim();
	const row = slug ? await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first() : null;
	if (!row || Number(row.private || 0) && !c.get("auth").see_private) return c.json({ error: "Not found" }, 404);
	const want = String((all.on || [""]).slice(-1)[0] || "");
	const org = ORG_TYPES_LIST.includes(String(row.type));
	if (!org) return c.json({ error: "Only organisations can be followed." }, 400);
	const has = org ? await c.env.DB.prepare("SELECT 1 FROM follows WHERE user_id=? AND company_id=?").bind(u.id, row.id).first() : await c.env.DB.prepare("SELECT 1 FROM watch_sources WHERE user_id=? AND kind='record' AND ref=?").bind(u.id, String(row.id)).first();
	const on = want === "1" ? true : want === "0" ? false : !has;
	if (on && !has) {
		if (org) await c.env.DB.prepare("INSERT OR IGNORE INTO follows(user_id,company_id,created) VALUES(?,?,?)").bind(u.id, row.id, nowStamp()).run();
		else await c.env.DB.prepare("INSERT OR IGNORE INTO watch_sources(user_id,kind,ref,created) VALUES(?,?,?,?)").bind(u.id, "record", String(row.id), nowStamp()).run();
	} else if (!on && has) {
		if (org) await c.env.DB.prepare("DELETE FROM follows WHERE user_id=? AND company_id=?").bind(u.id, row.id).run();
		else await c.env.DB.prepare("DELETE FROM watch_sources WHERE user_id=? AND kind='record' AND ref=?").bind(u.id, String(row.id)).run();
	}
	return c.json({ ok: true, on, slug: row.slug, org });
}
async function sourcesPayload(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const src = await wlSources(c.env.DB, c.get("auth").user.id);
	return {
		tab: "sources",
		following: src.orgs.map(epSuggestCard),
		sources: src,
		digest: epDigestInfo(c.get("auth").user),
		suggest: await epWatchSuggest(c.env.DB, c.get("auth").user.id, src),
		sections: WL_SECTIONS
	};
}
async function postWlSections(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const valid = WL_SECTIONS.map((s) => s[0]);
	const order = (all.order || []).filter((k) => valid.includes(k));
	const shown = new Set(all.show || []);
	const pr = prefsOf(c.get("auth").user);
	pr.sections = order;
	pr.hidden = valid.filter((k) => !shown.has(k));
	await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist?saved=1"
	});
	return c.redirect("/watchlist?saved=1");
}
async function postWlAdd(c) {
	const denied = needUser(c);
	if (denied) return denied;
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0].trim();
	const uid = c.get("auth").user.id;
	if (g("kind") === "tag" && g("ref").replace(/^#/, "").trim()) await c.env.DB.prepare("INSERT OR IGNORE INTO watch_sources(user_id,kind,ref,created) VALUES(?,?,?,?)").bind(uid, "tag", g("ref").replace(/^#/, "").trim().slice(0, 60), nowStamp()).run();
	const rid = [...all["rel.ref"] || [], g("ref")].find((x) => /^\d+$/.test(x));
	const row = g("kind") === "record" && rid ? await c.env.DB.prepare("SELECT * FROM records WHERE id=?").bind(Number(rid)).first() : null;
	if (row && ORG_TYPES_LIST.includes(String(row.type)) && (!Number(row.private || 0) || c.get("auth").see_private)) await c.env.DB.prepare("INSERT OR IGNORE INTO follows(user_id,company_id,created) VALUES(?,?,?)").bind(uid, row.id, nowStamp()).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/sources"
	});
	return c.redirect("/watchlist/sources");
}
async function postWlRemove(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0];
	const kind = g("kind"), ref = g("ref"), uid = c.get("auth").user.id;
	if (kind === "user" && /^\d+$/.test(ref)) await c.env.DB.prepare("DELETE FROM user_follows WHERE follower_id=? AND followee_id=?").bind(uid, Number(ref)).run();
	else if (kind === "org" && /^\d+$/.test(ref)) await c.env.DB.prepare("DELETE FROM follows WHERE user_id=? AND company_id=?").bind(uid, Number(ref)).run();
	else if (kind === "record" || kind === "tag") await c.env.DB.prepare("DELETE FROM watch_sources WHERE user_id=? AND kind=? AND ref=?").bind(uid, kind, ref).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/sources"
	});
	return c.redirect("/watchlist/sources");
}
async function newsletterPayload(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const prefs = prefsOf(c.get("auth").user);
	const days = Math.max(1, Math.min(31, Number(c.req.query("days") || (prefs.freq === "daily" ? 1 : 7)) || 7));
	const feed = await watchlistPayload(c, days);
	return {
		tab: "newsletter",
		days,
		mail_on: await mailConfigured(c.env.DB, c.env),
		weekdays: WEEKDAYS,
		prefs: {
			email: prefs.email || "",
			email_verified: Boolean(prefs.email_verified),
			freq: prefs.freq || "off",
			day: Number(prefs.day || 0),
			hour: Number(prefs.hour ?? 8),
			tz: prefs.tz || "",
			last_sent: prefs.last_sent || ""
		},
		items: feed.items || {},
		sources: feed.sources,
		suggest: feed.suggest,
		preview_html: epDigest(c.env, c.get("auth").user.id, feed.items || {}, days).html,
		sections: WL_SECTIONS
	};
}
async function postWlSchedule(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0].trim();
	const pr = prefsOf(c.get("auth").user);
	pr.freq = [
		"off",
		"weekly",
		"daily"
	].includes(g("freq")) ? g("freq") : "off";
	pr.day = /^\d+$/.test(g("day")) && Number(g("day")) < 7 ? Number(g("day")) : 0;
	pr.hour = /^\d+$/.test(g("hour")) && Number(g("hour")) < 24 ? Number(g("hour")) : 8;
	if (g("tz") && epLocalTime(g("tz"), new Date())) pr.tz = g("tz").slice(0, 64);
	await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/watchlist/newsletter?saved=1"
	});
	return c.redirect("/watchlist/newsletter?saved=1");
}
function unsubLink(env, uid) {
	const secret = env.EP_SECRET || "";
	return `${(env.EP_SITE_URL || "").replace(/\/$/, "") || ""}/unsubscribe?u=${uid}&s=${sign("unsub:" + uid, secret)}`;
}
// epDigest: the watchlist email, laid out like the Watchlist page (black bands per section, cards with a teal label).
function epDigest(env, uid, items, days) {
	const m = EP_MAIL, site = epMailSite(env);
	const names = Object.fromEntries(WL_SECTIONS.map(([k, n]) => [k, n]));
	const abs = (h) => /^https?:/.test(h || "") ? h : site + (h || "/");
	const total = Object.values(items).reduce((n, xs) => n + xs.length, 0);
	const span = days === 1 ? "the last day" : days === 7 ? "the last week" : `the last ${days} days`;
	let inner = `<p style="margin:0 0 18px;color:${m.muted}">${total ? `${total} new from what you watch in ${span}.` : `Nothing new from what you watch in ${span}.`}</p>`;
	const lines = [`${total} new on your ${SITE_NAME} watchlist (${span}).`, ""];
	for (const [k, xs] of Object.entries(items)) {
		if (!xs.length) continue;
		inner += `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px;border-collapse:collapse"><tr><td style="background:${m.ink};color:${m.paper};padding:6px 10px;font-family:${m.mono};font-size:12px;letter-spacing:.08em;text-transform:uppercase">${esc(names[k] || k)}</td><td align="right" style="background:${m.ink};color:${m.paper};padding:6px 10px;font-family:${m.mono};font-size:12px">${xs.length}</td></tr></table>`;
		lines.push(String(names[k] || k).toUpperCase());
		for (const x of xs) {
			const href = abs(x.href);
			const meta = [x.who?.name, x.meta].filter(Boolean).join(" · ");
			inner += `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px;border:1px solid ${m.ink};border-collapse:collapse;background:#fff"><tr><td style="padding:12px 14px"><div style="font-family:${m.mono};font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${m.accent};margin:0 0 4px">${esc(x.category || "")}</div><a href="${esc(href)}" style="font-family:${m.sans};font-size:17px;font-weight:700;line-height:1.3;color:${m.ink};text-decoration:none">${esc(x.name)}</a>` + (x.excerpt ? `<div style="font-size:14px;line-height:1.45;color:${m.muted};margin:6px 0 0">${esc(String(x.excerpt).slice(0, 220))}</div>` : "") + (meta ? `<div style="font-family:${m.mono};font-size:11px;color:${m.faint};margin:8px 0 0">${esc(meta)}</div>` : "") + `</td></tr></table>`;
			lines.push(`- ${x.name}: ${href}`);
		}
		inner += `<div style="height:10px"></div>`;
		lines.push("");
	}
	inner += `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 0"><tr><td style="background:${m.ink}"><a href="${site}/watchlist" style="display:inline-block;padding:10px 16px;font-family:${m.mono};font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${m.paper};text-decoration:none">Open your watchlist</a></td></tr></table>`;
	const unsub = unsubLink(env, uid);
	const foot = `<a href="${site}/watchlist/newsletter" style="color:${m.muted}">Change when this arrives</a> · <a href="${esc(unsub)}" style="color:${m.muted}">Unsubscribe</a>`;
	lines.push(`Open your watchlist: ${site}/watchlist`, `Change when this arrives: ${site}/watchlist/newsletter`, `Unsubscribe: ${unsub}`);
	return {
		total,
		subject: `${SITE_NAME}: your watchlist, ${total} new`,
		html: epMailWrap(inner, env, { band: "Watchlist", bandNote: span, foot, preview: `${total} new from what you watch` }),
		text: lines.join("\n")
	};
}
// epDigestInfo: the digest schedule shown in the Watchlist side panel.
function epDigestInfo(u) {
	const pr = prefsOf(u);
	return { freq: pr.freq || "off", day: Number(pr.day || 0), hour: Number(pr.hour ?? 8), last_sent: pr.last_sent || "", email: Boolean(pr.email), email_verified: Boolean(pr.email_verified) };
}
// epLocalTime: weekday (0 = Monday, like WEEKDAYS) and hour in the member's own time zone.
function epLocalTime(tz, d) {
	try {
		const p = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: tz || "UTC", weekday: "long", hour: "numeric", hourCycle: "h23" }).formatToParts(d).map((x) => [x.type, x.value]));
		return { day: WEEKDAYS.indexOf(p.weekday), hour: Number(p.hour) % 24 };
	} catch {
		return null;
	}
}
// epDigestCron: runs every hour (wrangler.json triggers.crons) and sends each member's digest at the day and hour they picked.
async function epDigestCron(env) {
	if (!await mailConfigured(env.DB, env)) return;
	const now = new Date();
	const { results } = await env.DB.prepare("SELECT * FROM users WHERE disabled=0 AND json_extract(prefs,'$.freq') IN ('daily','weekly')").all();
	for (const u of results || []) {
		try {
			const pr = prefsOf(u);
			if (!pr.email || !pr.email_verified) continue;
			const t = epLocalTime(pr.tz || "UTC", now);
			if (!t || t.hour !== Number(pr.hour ?? 8)) continue;
			if (pr.freq === "weekly" && t.day !== Number(pr.day || 0)) continue;
			const last = pr.auto_sent ? Date.parse(pr.auto_sent + ":00Z") : 0;
			if (last && now.getTime() - last < (pr.freq === "daily" ? 20 : 6 * 24) * 36e5) continue;
			const days = pr.freq === "daily" ? 1 : 7;
			const ctx = {
				env,
				get: (k) => k === "auth" ? { user: u, see_private: false } : void 0,
				req: { url: epMailSite(env) + "/watchlist", path: "/cron", query: () => void 0, header: () => "" },
				redirect: () => null
			};
			const items = (await watchlistPayload(ctx, days)).items || {};
			const d = epDigest(env, u.id, items, days);
			if (!d.total) continue;
			const err = await sendMail(env.DB, env, { to: pr.email, from: EP_DIGEST_FROM, subject: d.subject, html: d.html, text: d.text });
			if (!err) {
				pr.last_sent = pr.auto_sent = now.toISOString().slice(0, 16);
				await env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), u.id).run();
			}
		} catch (ex) {
			console.log("[digest] user " + u.id + ": " + (ex instanceof Error ? ex.message : String(ex)));
		}
	}
}
async function postWlSend(c) {
	const denied = needUser(c);
	if (denied) return denied;
	const all = await formAll(c);
	const days = Math.max(1, Math.min(31, parseInt((all.days || ["7"]).slice(-1)[0], 10) || 7));
	const pr = prefsOf(c.get("auth").user);
	const email = String(pr.email || "");
	const wantsJson = c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json");
	const reply = (ok, msg, kind) => wantsJson ? c.json({ ok, kind, message: msg, next: `/watchlist/newsletter?days=${days}&sent=${encodeURIComponent(msg)}` }) : c.redirect(`/watchlist/newsletter?days=${days}&sent=${encodeURIComponent(msg)}`);
	if (!await mailConfigured(c.env.DB, c.env)) return reply(false, "Email sending isn't set up on this site yet.", "error");
	if (!email) return reply(false, "Add your email address first (Account, then Settings).", "error");
	if (!pr.email_verified) return reply(false, "Confirm your email first (Account, then Settings).", "error");
	const items = (await watchlistPayload(c, days)).items || {};
	const { total, html, text, subject } = epDigest(c.env, c.get("auth").user.id, items, days);
	if (!total) return reply(false, `Nothing new from what you watch in ${days === 1 ? "the last day" : days === 7 ? "the last week" : "the last month"}, so no email was sent. Try a longer range or watch more things.`, "empty");
	const err = await sendMail(c.env.DB, c.env, {
		to: email,
		from: EP_DIGEST_FROM,
		subject,
		html,
		text,
		headers: {
			"List-Unsubscribe": `<${unsubLink(c.env, c.get("auth").user.id)}>`,
			"List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
		}
	});
	if (!err) {
		pr.last_sent = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
		await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), c.get("auth").user.id).run();
	}
	if (err) return reply(false, "The email couldn't be sent: " + err, "error");
	return reply(true, `Sent ${total} new item${total === 1 ? "" : "s"} to ${email}${c.env.EP_ENV !== "production" ? " (logged, not delivered)" : ""}. It can take a minute to arrive.`, "sent");
}
async function unsubscribe(c) {
	const uid = c.req.query("u") || "";
	const s = c.req.query("s") || "";
	const secret = c.env.EP_SECRET || "";
	const ok = /^\d+$/.test(uid) && s === sign("unsub:" + uid, secret);
	if (ok) {
		const row = await c.env.DB.prepare("SELECT * FROM users WHERE id=?").bind(Number(uid)).first();
		if (row) {
			const pr = prefsOf(row);
			pr.freq = "off";
			await c.env.DB.prepare("UPDATE users SET prefs=? WHERE id=?").bind(JSON.stringify(pr), row.id).run();
		}
	}
	if (c.req.method === "POST") return c.text(ok ? "OK" : "Invalid link", ok ? 200 : 400);
	return c.json({
		ok,
		title: ok ? "You're unsubscribed" : "This link isn't valid"
	});
}
// backend/worker/src/create.ts
async function createPayload(c, kind) {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401
	};
	const owned = await ownedCompanies(c.env.DB, auth.user.id);
	return {
		kind,
		logged: auth.logged,
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name,
			type: o.type
		})),
		org_types: ORG_TYPES_LIST.map((k) => ({
			key: k,
			label: k[0].toUpperCase() + k.slice(1)
		})),
		product_types: HW_CATEGORIES.map((h) => ({
			key: h.key,
			label: h.label
		})),
		note: auth.logged ? "Goes live straight away." : "Goes live after review."
	};
}
async function postCreateOrg(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const name = g("name").slice(0, 200);
	if (!name) return c.json({ error: "A name is required." }, 400);
	const org_type = ORG_TYPES_LIST.includes(g("type") || g("org_type")) ? g("type") || g("org_type") : "company";
	const data = {};
	if (g("website")) data.website = { v: g("website") };
	if (g("country")) data.country = { v: g("country") };
	if (g("city")) data.city = { v: g("city") };
	return afterSubmit(c, await submitAndMaybeApply(c.env.DB, auth, "company_new", null, {
		name,
		org_type,
		summary: g("summary"),
		body: g("body"),
		data,
		parent: g("parent") ? Number(g("parent")) : null
	}), "/account/companies?posted=1");
}
async function postCreateItem(c, typ) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email first." }, 403);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const name = (g("name") || g("title")).slice(0, 200);
	if (!name) return c.json({ error: "A name is required." }, 400);
	const company = Number(g("company") || g("as") || 0);
	if (!company) return c.json({ error: "Pick the organisation this belongs to." }, 400);
	if (!auth.logged && !await isOwner(c.env.DB, auth.user.id, company)) return c.json({ error: "You can only post from a page you manage." }, 403);
	const data = {};
	if (typ === "product") {
		if (g("category")) data.category = { v: g("category") };
		if (g("status")) data.status = { v: g("status") };
	} else {
		data.status = { v: "Open" };
		data.posted = { v: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) };
		if (g("location")) data.location = { v: g("location") };
	}
	const tkey = typ === "job" ? "job" : "product";
	return afterSubmit(c, await submitAndMaybeApply(c.env.DB, auth, typ === "job" ? "job" : "item", null, {
		type: tkey,
		name,
		title: name,
		intro: g("summary"),
		summary: g("summary"),
		body: g("body"),
		as: company,
		company,
		data,
		kind: typ === "job" ? "job" : "blog"
	}), typ === "job" ? "/account/posts?posted=1" : "/account/companies?posted=1");
}
async function afterSubmit(c, sid, queued) {
	const sub = await c.env.DB.prepare("SELECT status, result_id FROM submissions WHERE id=?").bind(sid).first();
	if (sub?.status === "approved" && sub.result_id) {
		const slug = (await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(sub.result_id).first())?.slug;
		return c.json({
			ok: true,
			id: sid,
			next: slug ? "/r/" + slug : queued
		});
	}
	return c.json({
		ok: true,
		id: sid,
		next: queued
	});
}
// backend/worker/src/reports.ts
async function reportsPayload(c) {
	await ensureExtraSchema(c.env.DB);
	const st = c.req.query("status") || "open";
	const { results } = await c.env.DB.prepare("SELECT r.*, u.name AS rname FROM reports r LEFT JOIN users u ON u.id=r.user_id WHERE r.status " + (st === "open" ? "='open'" : "<>'open'") + " ORDER BY r.id DESC LIMIT 300").all();
	const items = [];
	for (const raw of results || []) {
		const r = raw;
		let what = `${r.kind} #${r.target_id}`;
		let author = "";
		if (r.kind === "record") {
			const rec = await c.env.DB.prepare("SELECT slug, name FROM records WHERE id=?").bind(r.target_id).first();
			if (rec) what = `<a href="/r/${rec.slug}">${rec.name}</a>`;
		} else if (r.kind === "comment") {
			const cm = await c.env.DB.prepare("SELECT body, record_id FROM comments WHERE id=?").bind(r.target_id).first();
			if (cm) what = cm.body;
		}
		items.push({
			id: Number(r.id),
			kind: String(r.kind || ""),
			target_id: Number(r.target_id || 0),
			reason: String(r.reason || ""),
			note: String(r.note || ""),
			status: String(r.status || ""),
			action: String(r.action || ""),
			created: String(r.created || ""),
			rname: String(r.rname || "a former member"),
			what,
			author
		});
	}
	return {
		status: st,
		items,
		words: await setting$1(c.env.DB, "spam_blocklist")
	};
}
async function postReports(c) {
	if (!can(c.get("auth"), "review")) return c.json({ error: "Not found" }, 404);
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const act = g("action");
	if (act === "words") {
		await setSetting(c.env.DB, "spam_blocklist", g("words").split(/\n/).map((w) => w.trim()).filter(Boolean).join("\n").slice(0, 5e3));
		return c.json({
			ok: true,
			message: "Blocked words saved.",
			next: "/admin/reports"
		});
	}
	const row = await c.env.DB.prepare("SELECT * FROM reports WHERE id=? AND status='open'").bind(Number(g("id") || 0)).first();
	if (row) {
		if (act === "hide" && row.kind === "record") await c.env.DB.prepare("UPDATE records SET private=1 WHERE id=?").bind(row.target_id).run();
		if (act === "remove" && row.kind === "comment") await c.env.DB.prepare("DELETE FROM comments WHERE id=?").bind(row.target_id).run();
		await c.env.DB.prepare("UPDATE reports SET status=?, action=?, decided=? WHERE id=?").bind("done", act === "dismiss" ? "dismissed" : act, nowStamp(), row.id).run();
	}
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/reports"
	});
	return c.redirect("/admin/reports");
}
// backend/worker/src/community.ts
function maskEmail(em) {
	const [u, d] = em.split("@");
	if (!d) return em;
	return (u[0] || "") + "***@" + d;
}
async function communityPayload(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	const sent = c.req.query("sent") || "";
	const err = c.req.query("err") || "";
	let mine = [];
	if (auth.user) {
		const { results } = await c.env.DB.prepare("SELECT * FROM meet_requests WHERE user_id=? ORDER BY id DESC LIMIT 50").bind(auth.user.id).all();
		mine = results || [];
	}
	const pending = Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE status='pending'").first())?.n || 0);
	const orgN = Number((await c.env.DB.prepare(`SELECT COUNT(*) AS n FROM records WHERE type IN (${ORG_TYPES_LIST.map(() => "?").join(",")})`).bind(...ORG_TYPES_LIST).first())?.n || 0);
	const peopleN = Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM users WHERE disabled=0").first())?.n || 0);
	return {
		tab: "meet",
		user: Boolean(auth.user),
		can_meet: can(auth, "meet"),
		is_admin: auth.is_admin,
		needs: COMMUNITY_NEEDS,
		org_groups: ORG_GROUPS.map((g) => g.label),
		why_max: INTRO_WHY_MAX,
		email: prefsOf(auth.user).email || "",
		mine,
		counts: {
			pending,
			orgs: orgN,
			people: peopleN
		},
		sent,
		err
	};
}
async function postMeet(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/community/need");
	await ensureExtraSchema(c.env.DB);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const why = g("why").slice(0, INTRO_WHY_MAX);
	const need = COMMUNITY_NEEDS.includes(g("need")) ? g("need") : "";
	const email = g("contact_email").slice(0, 200);
	const go = (q) => {
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			ok: q.startsWith("sent"),
			next: "/community/need?" + q,
			error: q.startsWith("err=") ? decodeURIComponent(q.slice(4)) : void 0
		}, q.startsWith("err") ? 400 : 200);
		return c.redirect("/community/need?" + q);
	};
	if (!need || !why) return go("err=" + encodeURIComponent("Pick what you need and describe it in a few words."));
	if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return go("err=" + encodeURIComponent("Add an email address we can introduce you at."));
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM meet_requests WHERE user_id=? AND created > datetime('now', '-1 day')").bind(auth.user.id).first())?.n || 0) >= 5) return go("err=" + encodeURIComponent("You've sent several requests today. Try again tomorrow."));
	const group = ORG_GROUPS.some((x) => x.label === g("org_group")) ? g("org_group") : "";
	await c.env.DB.prepare("INSERT INTO meet_requests(user_id, who_kind, who_role, org_group, org_id, topic, why, location, by_when, status, created, contact_email) VALUES(?, 'either', ?, ?, NULL, ?, ?, ?, ?, 'pending', datetime('now'), ?)").bind(auth.user.id, g("who_role").slice(0, 200), group, need, why, g("location").slice(0, 120), g("by_when").slice(0, 60), email).run();
	const { results } = await c.env.DB.prepare("SELECT * FROM users WHERE disabled=0 AND role IN ('admin','contributor')").all();
	const to = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf(u);
		if (u.role === "admin" || Array.isArray(pr.perms) && pr.perms.includes("meet")) {
			const em = String(pr.email || "");
			if (em.includes("@")) to.push(em);
		}
	}
	for (const addr of to) await sendMail(c.env.DB, c.env, {
		to: addr,
		subject: `${SITE_NAME}: new request from ${auth.user.username} (${need})`,
		html: `<p>${auth.user.username} needs: ${need}.</p>`,
		text: `${auth.user.username} needs: ${need}.`
	});
	return go("sent=meet");
}
async function postWithdraw(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/community/need");
	const all = await formAll(c);
	const id = Number((all.id || [""]).slice(-1)[0] || 0);
	await c.env.DB.prepare("UPDATE meet_requests SET status='withdrawn', decided=datetime('now') WHERE id=? AND user_id=? AND status='pending'").bind(id, auth.user.id).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/community/need?sent=withdrawn"
	});
	return c.redirect("/community/need?sent=withdrawn");
}
async function meetAdminPayload(c) {
	if (!can(c.get("auth"), "meet")) return {
		error: "Not found",
		status: 404
	};
	await ensureExtraSchema(c.env.DB);
	const st = c.req.query("status") || "pending";
	const need = c.req.query("need") || "";
	const { results } = await c.env.DB.prepare("SELECT m.*, u.name AS uname, u.username AS uuser, u.prefs AS uprefs, u.profile AS uprofile FROM meet_requests m JOIN users u ON u.id=m.user_id WHERE " + (st === "pending" ? "m.status='pending'" : "m.status<>'pending'") + " ORDER BY m.id DESC LIMIT 300").all();
	const items = [];
	const counts = {};
	for (const raw of results || []) {
		const m = raw;
		const topic = String(m.topic || "Other");
		counts[topic] = (counts[topic] || 0) + 1;
		if (need && topic !== need) continue;
		const em = String(m.contact_email || prefsOf({ prefs: String(m.uprefs || "") }).email || "");
		items.push({
			id: Number(m.id),
			topic,
			why: String(m.why || ""),
			who_role: String(m.who_role || ""),
			org_group: String(m.org_group || ""),
			location: String(m.location || ""),
			by_when: String(m.by_when || ""),
			status: String(m.status || ""),
			created: String(m.created || ""),
			username: String(m.uuser || ""),
			email: c.get("auth").is_admin ? em : maskEmail(em),
			email_full: c.get("auth").is_admin
		});
	}
	return {
		tab: "requests",
		status: st,
		need,
		items,
		counts
	};
}
async function postMeetAdmin(c) {
	if (!can(c.get("auth"), "meet")) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const act = g("action");
	const mid = Number(g("id") || 0);
	if ((act === "done" || act === "declined") && mid) await c.env.DB.prepare("UPDATE meet_requests SET status=?, decided=datetime('now'), handled_by=? WHERE id=? AND status='pending'").bind(act, c.get("auth").user.id, mid).run();
	if (c.req.path.startsWith("/api/")) return c.json({
		ok: true,
		next: "/admin/meet"
	});
	return c.redirect("/admin/meet");
}
async function communityOrgsPayload(c) {
	if (!can(c.get("auth"), "meet")) return {
		error: "Not found",
		status: 404
	};
	const recs = await allPublic(c.env.DB, `SELECT * FROM records WHERE type IN (${ORG_TYPES_LIST.map(() => "?").join(",")}) ORDER BY name COLLATE NOCASE`, ...ORG_TYPES_LIST);
	const { results: owners } = await c.env.DB.prepare("SELECT o.company_id, u.name, u.username FROM owners o JOIN users u ON u.id=o.user_id").all();
	const by = {};
	for (const r of owners || []) {
		const x = r;
		(by[x.company_id] ||= []).push({
			name: x.name,
			username: x.username
		});
	}
	function asList(v) {
		if (Array.isArray(v)) return v.map(String).filter(Boolean);
		if (typeof v === "string" && v.trim()) return v.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
		return [];
	}
	return {
		tab: "orgs",
		is_admin: Boolean(c.get("auth").is_admin),
		items: recs.map((r) => {
			const roles = asList(fieldVal(r.data, "roles"));
			const open_to = asList(fieldVal(r.data, "open_to"));
			const locs = fieldVal(r.data, "locations");
			const locRows = Array.isArray(locs) ? locs : [];
			const city = (locRows.find((l) => l && (l.city || l.address)) || {}).city || (locRows.find((l) => l && l.address) || {}).address || String(fieldVal(r.data, "city") || "");
			const country = String(fieldVal(r.data, "country") || "");
			const place = [city, country].filter(Boolean).join(", ");
			return {
				id: r.id,
				slug: r.slug,
				name: r.name,
				type: r.type,
				summary: r.summary,
				roles,
				open_to,
				place,
				country,
				website: String(fieldVal(r.data, "website") || ""),
				open_note: String(fieldVal(r.data, "open_note") || ""),
				owners: by[r.id] || [],
				ph: phModel(r, "sm")
			};
		})
	};
}
async function communityPeoplePayload(c) {
	if (!c.get("auth").is_admin) return {
		error: "Not found",
		status: 404
	};
	const { results } = await c.env.DB.prepare("SELECT id, username, name, role, prefs, profile, created FROM users WHERE disabled=0 ORDER BY username COLLATE NOCASE").all();
	const items = [];
	for (const raw of results || []) {
		const u = raw;
		const pr = prefsOf({ prefs: String(u.prefs || "") });
		let prof = {};
		try {
			prof = JSON.parse(String(u.profile || "{}"));
		} catch {}
		const pv = (k) => {
			const x = prof[k];
			return x && typeof x === "object" && "v" in x ? x.v : x;
		};
		const { results: reqs } = await c.env.DB.prepare("SELECT topic, why, status, contact_email, created FROM meet_requests WHERE user_id=? ORDER BY id DESC LIMIT 5").bind(u.id).all();
		items.push({
			id: Number(u.id),
			username: String(u.username),
			role: String(u.role),
			created: String(u.created || ""),
			email: String(pr.email || ""),
			title: pv("title") || "",
			organisation: pv("organisation") || "",
			location: pv("location") || "",
			bio: pv("bio") || "",
			open_to: pv("open_to") || [],
			interests: pv("interests") || [],
			requests: reqs || []
		});
	}
	return {
		tab: "people",
		items
	};
}
// backend/worker/src/claims.ts
var CODE_MINUTES = 30;
var MAX_TRIES = 5;
var CODES_PER_HOUR = 3;
function orgDomain(rec) {
	const url = fieldStr(rec.data, "website") || "";
	if (!url) return "";
	try {
		const host = new URL(url.includes("://") ? url : "https://" + url).hostname.toLowerCase();
		return host.startsWith("www.") ? host.slice(4) : host;
	} catch {
		return "";
	}
}
function domainOk(email, dom) {
	if (!dom || !email.includes("@")) return false;
	const ed = email.split("@").pop().toLowerCase().trim();
	if (FREE_MAIL.has(ed)) return false;
	return ed === dom || ed.endsWith("." + dom) || dom.endsWith("." + ed);
}
function hashCode(secret, code, uid, rid) {
	const key = new TextEncoder().encode(`${secret}:${uid}:${rid}`);
	return bytesToHex(hmac(sha256, key, new TextEncoder().encode(code)));
}
async function recOf(c, slug) {
	const row = await c.env.DB.prepare(`SELECT * FROM records WHERE slug=? AND type IN (${ORG_TYPES_LIST.map(() => "?").join(",")})`).bind(slug, ...ORG_TYPES_LIST).first();
	if (!row) return null;
	const rec = loadRow(row);
	if (rec.private && !c.get("auth").see_private) return null;
	return rec;
}
async function claimPayload(c, slug, msg = "", err = "") {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401,
		next: "/login?next=/claim/" + slug
	};
	const rec = await recOf(c, slug);
	if (!rec) return {
		error: "Not found",
		status: 404
	};
	await ensureExtraSchema(c.env.DB);
	const label = (TYPE_LABELS[rec.type]?.label || rec.type).toLowerCase();
	const dom = orgDomain(rec);
	const mail = await mailOn(c.env.DB, c.env);
	let step = "blocked";
	let pendingEmail = "";
	if (rec.slug === "embodiment-place") step = "site";
	else if (await isOwner(c.env.DB, auth.user.id, rec.id)) step = "owner";
	else if (await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first()) step = "queued";
	else if (!dom) step = "nowebsite";
	else if (!mail) step = "nomail";
	else {
		const pend = await c.env.DB.prepare("SELECT * FROM claim_codes WHERE user_id=? AND record_id=? AND used=0 AND created > datetime('now', ?) ORDER BY id DESC LIMIT 1").bind(auth.user.id, rec.id, `-${CODE_MINUTES} minutes`).first();
		pendingEmail = pend?.email || "";
		step = pend ? "code" : "email";
	}
	return {
		slug: rec.slug,
		name: rec.name,
		type: rec.type,
		label,
		domain: dom,
		step,
		pending_email: pendingEmail,
		msg,
		err,
		minutes: CODE_MINUTES
	};
}
async function postClaimCode(c, slug) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/claim/" + slug);
	const rec = await recOf(c, slug);
	if (!rec || rec.slug === "embodiment-place") return c.json({ error: "Not found" }, 404);
	const email = (((await formAll(c)).email || [""]).slice(-1)[0] || "").trim().toLowerCase().slice(0, 200);
	const dom = orgDomain(rec);
	const again = async (err, msg = "") => {
		const p = await claimPayload(c, slug, msg, err);
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			...p,
			error: err || void 0
		});
		return c.redirect(`/claim/${slug}?err=${encodeURIComponent(err)}`);
	};
	if (!domainOk(email, dom)) return again(`Use an email address ending in @${dom}. Personal addresses aren't accepted.`);
	if (Number((await c.env.DB.prepare("SELECT COUNT(*) AS n FROM claim_codes WHERE user_id=? AND created > datetime('now', '-1 hour')").bind(auth.user.id).first())?.n || 0) >= CODES_PER_HOUR) return again("You've asked for several codes in the last hour. Try again later.");
	const code = String(Math.floor(Math.random() * 1e6)).padStart(6, "0");
	await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE user_id=? AND record_id=? AND used=0").bind(auth.user.id, rec.id).run();
	await c.env.DB.prepare("INSERT INTO claim_codes(user_id, record_id, email, code_hash, created) VALUES(?,?,?,?,datetime('now'))").bind(auth.user.id, rec.id, email, hashCode(c.env.EP_SECRET || "", code, auth.user.id, rec.id)).run();
	if (await sendMail(c.env.DB, c.env, {
		to: email,
		subject: `embodiment.place: your code to claim ${rec.name}`,
		html: `<p>Your code is <b>${code}</b></p><p>Use it within ${CODE_MINUTES} minutes to claim ${rec.name} on embodiment.place.</p>`,
		text: `Your code is ${code}. Use it within ${CODE_MINUTES} minutes to claim ${rec.name} on embodiment.place.`
	})) return again("We couldn't send the email. Please try again later.");
	const p = await claimPayload(c, slug, `Code sent to ${email}.`);
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
		ok: true,
		...p
	});
	return c.redirect(`/claim/${slug}?msg=${encodeURIComponent("Code sent to " + email + ".")}`);
}
async function postClaimVerify(c, slug) {
	const auth = c.get("auth");
	if (!auth.user) return c.redirect("/login?next=/claim/" + slug);
	const rec = await recOf(c, slug);
	if (!rec || rec.slug === "embodiment-place") return c.json({ error: "Not found" }, 404);
	const code = (((await formAll(c)).code || [""]).slice(-1)[0] || "").trim();
	const row = await c.env.DB.prepare("SELECT * FROM claim_codes WHERE user_id=? AND record_id=? AND used=0 AND created > datetime('now', ?) ORDER BY id DESC LIMIT 1").bind(auth.user.id, rec.id, `-${CODE_MINUTES} minutes`).first();
	const fail = async (err) => {
		const p = await claimPayload(c, slug, "", err);
		if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) return c.json({
			...p,
			error: err
		}, 400);
		return c.redirect(`/claim/${slug}?err=${encodeURIComponent(err)}`);
	};
	if (!row) return fail("That code has expired. Ask for a new one.");
	if (row.tries >= MAX_TRIES) {
		await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE id=?").bind(row.id).run();
		return fail("Too many wrong codes. Ask for a new one.");
	}
	const expect = hashCode(c.env.EP_SECRET || "", code, auth.user.id, rec.id);
	if (!timingEqual(row.code_hash, expect)) {
		await c.env.DB.prepare("UPDATE claim_codes SET tries=tries+1 WHERE id=?").bind(row.id).run();
		return fail(`That code isn't right (${MAX_TRIES - row.tries - 1} tries left).`);
	}
	await c.env.DB.prepare("UPDATE claim_codes SET used=1 WHERE id=?").bind(row.id).run();
	if (!await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first()) await submitAndMaybeApply(c.env.DB, auth, "claim", rec.id, {
		company: rec.name,
		email: row.email,
		domain: orgDomain(rec),
		verified: nowStamp()
	});
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("json")) {
		const p = await claimPayload(c, slug);
		return c.json({
			ok: true,
			...p,
			next: `/claim/${rec.slug}`
		});
	}
	return c.redirect(`/claim/${rec.slug}`);
}
// backend/worker/src/geo.ts
var geoCache = /* @__PURE__ */ new Map();
var suggestCache = /* @__PURE__ */ new Map();
var lastGeocode = 0;
var lastSuggest = 0;
async function pace(last, minMs) {
	const wait = minMs - (Date.now() - last);
	if (wait > 0) await new Promise((r) => setTimeout(r, wait));
	return Date.now();
}
async function geocode(q) {
	q = (q || "").trim();
	if (!q || false) return null;
	const key = q.toLowerCase();
	if (geoCache.has(key)) return geoCache.get(key);
	const url = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
		format: "jsonv2",
		limit: "1",
		q
	});
	lastGeocode = await pace(lastGeocode, 1100);
	try {
		const r = await fetch(url, {
			headers: {
				"User-Agent": GEOCODE_UA,
				"Accept-Language": "en"
			},
			signal: AbortSignal.timeout(6e3)
		});
		if (!r.ok) return null;
		const rows = await r.json();
		const hit = rows?.[0] ? {
			lat: Math.round(Number(rows[0].lat) * 1e5) / 1e5,
			lon: Math.round(Number(rows[0].lon) * 1e5) / 1e5
		} : null;
		if (hit && !Number.isFinite(hit.lat)) return null;
		geoCache.set(key, hit);
		return hit;
	} catch {
		return null;
	}
}
async function suggestAddress(q, limit = 5) {
	q = (q || "").trim();
	if (q.length < 3 || false) return [];
	const key = q.toLowerCase();
	if (suggestCache.has(key)) return suggestCache.get(key);
	const url = ADDRESS_SUGGEST_URL + ("https://photon.komoot.io/api/".includes("?") ? "&" : "?") + new URLSearchParams({
		q,
		limit: String(limit),
		lang: "en"
	});
	lastSuggest = await pace(lastSuggest, 250);
	try {
		const r = await fetch(url, {
			headers: { "User-Agent": GEOCODE_UA },
			signal: AbortSignal.timeout(5e3)
		});
		if (!r.ok) return [];
		const feats = (await r.json()).features || [];
		const out = [];
		const seen = /* @__PURE__ */ new Set();
		for (const f of feats) {
			const p = f.properties || {};
			const g = f.geometry?.coordinates || [];
			if (g.length < 2) continue;
			const street = [p.housenumber, p.street].filter(Boolean).join(" ");
			const parts = [
				p.name && p.name !== p.city ? p.name : "",
				street,
				p.city || p.district || p.county,
				p.state,
				p.postcode,
				p.country
			].filter(Boolean);
			const label = [...new Set(parts)].join(", ");
			if (!label || seen.has(label)) continue;
			seen.add(label);
			out.push({
				label,
				lat: Math.round(Number(g[1]) * 1e5) / 1e5,
				lon: Math.round(Number(g[0]) * 1e5) / 1e5
			});
		}
		if (suggestCache.size > 2e3) suggestCache.clear();
		suggestCache.set(key, out);
		return out;
	} catch {
		return [];
	}
}
async function apiGeocode(c) {
	if (!c.get("auth").user) return c.json({
		items: [],
		error: "Log in first."
	}, 401);
	const q = (c.req.query("q") || "").trim().slice(0, 200);
	if (!q) return c.json({ error: "Type an address first." }, 400);
	const hit = await geocode(q);
	if (!hit) return c.json({ error: "Not found, or the lookup service can't be reached. Type the coordinates instead." }, 404);
	return c.json(hit);
}
async function apiAddress(c) {
	if (!c.get("auth").user) return c.json({ items: [] }, 401);
	return c.json({ items: await suggestAddress((c.req.query("q") || "").slice(0, 200)) });
}
// backend/worker/src/manage.ts
var TABS = [
	["info", "Info"],
	["leadership", "Leadership"],
	["labs", "Labs"],
	["connections", "Connections"],
	["products", "Products"],
	["jobs", "Jobs"],
	["posts", "Posts"],
	["highlights", "Highlights"],
	["requests", "Requests"]
];
var CONN_HELP = {
	partners: "Companies you work with: technology, research or commercial partners.",
	backed_by: "Investors in this organisation. Funding rounds on the site add theirs too.",
	sells_to: "Organisations you sell to or deploy for. Deployments on the site add theirs too.",
	buys_from: "Who supplies you: parts, data, compute, software."
};
var CONN_LABEL = {
	partners: "Partners",
	backed_by: "Investors",
	sells_to: "Customers",
	buys_from: "Suppliers"
};
var LAB_KEYS = [
	"name",
	"summary",
	"head",
	"email",
	"url"
];
async function orgOf(c, slug) {
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE slug=?").bind(slug).first();
	if (!row) return null;
	const rec = loadRow(row);
	if (!ORG_TYPES_LIST.includes(rec.type)) return null;
	return rec;
}
async function canManage(c, companyId) {
	const auth = c.get("auth");
	if (!auth.user) return false;
	if (auth.logged) return true;
	return isOwner(c.env.DB, auth.user.id, companyId);
}
function fieldV(data, key) {
	const raw = data?.[key];
	if (raw && typeof raw === "object" && "v" in raw) return String(raw.v ?? "");
	return raw == null ? "" : String(raw);
}
function fieldAny(data, key) {
	const raw = data?.[key];
	if (raw && typeof raw === "object" && !Array.isArray(raw) && "v" in raw) return raw.v ?? null;
	return raw ?? null;
}
function labsOf(data) {
	const raw = data.labs;
	const v = raw && typeof raw === "object" && "v" in raw ? raw.v : raw;
	return Array.isArray(v) ? v.filter((x) => x && typeof x === "object" && x.name) : [];
}
async function resolveOrg(db, token, selfId) {
	const t = token.trim();
	if (!t) return null;
	const row = /^\d+$/.test(t) ? await db.prepare("SELECT id, type FROM records WHERE id=?").bind(Number(t)).first() : await db.prepare("SELECT id, type FROM records WHERE slug=?").bind(t).first();
	if (!row) return null;
	const id = Number(row.id);
	if (id === selfId) return null;
	if (!ORG_TYPES_LIST.includes(String(row.type))) return null;
	return id;
}
function jsonOrRedirect(c, next, extra = {}) {
	if (c.req.path.startsWith("/api/") || (c.req.header("accept") || "").includes("application/json")) return c.json({
		ok: true,
		next,
		...extra
	});
	return c.redirect(next);
}
async function managePayload(c, slug, tab = "info") {
	const auth = c.get("auth");
	if (!auth.user) return {
		error: "login",
		status: 401,
		next: "/login?next=/manage/" + slug
	};
	const rec = await orgOf(c, slug);
	if (!rec) return {
		error: "Not found",
		status: 404
	};
	if (!await canManage(c, rec.id)) return {
		error: "not_yours",
		status: 403,
		rec: {
			slug: rec.slug,
			name: rec.name
		},
		next: "/claim/" + rec.slug
	};
	const section = TABS.some(([k]) => k === tab) ? tab : "info";
	const owned = await ownedCompanies(c.env.DB, auth.user.id);
	const { results: owners } = await c.env.DB.prepare("SELECT u.id, u.username, u.name FROM owners o JOIN users u ON u.id=o.user_id WHERE o.company_id=?").bind(rec.id).all();
	const leaders = ((await c.env.DB.prepare("SELECT r.id, r.slug, r.name, l.note AS title FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel='leaders' ORDER BY l.pos, r.name").bind(rec.id).all()).results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		title: String(r.title || "")
	}));
	const connections = {};
	for (const rel of CONNECTION_RELS) {
		const { results } = await c.env.DB.prepare("SELECT r.id, r.slug, r.name, l.note FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel=? ORDER BY l.pos, r.name").bind(rec.id, rel).all();
		connections[rel] = (results || []).map((r) => ({
			id: Number(r.id),
			slug: String(r.slug),
			name: String(r.name),
			note: String(r.note || "")
		}));
	}
	const posts = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r JOIN links l ON (l.src=r.id AND l.dst=?) OR (l.dst=r.id AND l.src=?) WHERE r.type IN ('post','paper') AND l.rel IN ('about','orgs') ORDER BY r.id DESC LIMIT 80", rec.id, rec.id);
	const jobs = (await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.summary, r.data FROM records r JOIN links l ON l.src=r.id WHERE l.dst=? AND r.type='job' ORDER BY r.id DESC LIMIT 80", rec.id)).map((j) => {
		const st = fieldV(j.data || {}, "status") || "Open";
		return {
			...j,
			status: st,
			open: st === "Open"
		};
	});
	const products = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r JOIN links l ON l.src=r.id WHERE l.dst=? AND r.type IN ('product','model','software','datapack','benchmark','solution') ORDER BY r.name COLLATE NOCASE LIMIT 80", rec.id);
	const highlights = ((await c.env.DB.prepare("SELECT r.id, r.slug, r.name, r.type, r.summary, l.note FROM links l JOIN records r ON r.id=l.dst WHERE l.src=? AND l.rel='highlights' ORDER BY l.pos").bind(rec.id).all()).results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		type: String(r.type),
		summary: String(r.summary || ""),
		note: String(r.note || "")
	}));
	const cand = await allPublic(c.env.DB, "SELECT r.id, r.slug, r.name, r.type, r.summary FROM records r WHERE r.id IN (SELECT src FROM links WHERE dst=? UNION SELECT dst FROM links WHERE src=?) AND r.id<>? AND r.type NOT IN ('company','university','lab','person') ORDER BY r.type, r.name COLLATE NOCASE LIMIT 200", rec.id, rec.id, rec.id);
	let quotes = [];
	let nreq = 0;
	try {
		const { results } = await c.env.DB.prepare("SELECT r.*, rec.name AS product, rec.slug AS slug FROM referrals r JOIN records rec ON rec.id=r.record_id WHERE rec.id IN (SELECT src FROM links WHERE dst=? UNION SELECT dst FROM links WHERE src=?) ORDER BY r.id DESC LIMIT 200").bind(rec.id, rec.id).all();
		quotes = (results || []).map((raw) => {
			const r = raw;
			let p = {};
			try {
				p = JSON.parse(String(r.payload || "{}"));
			} catch {}
			return {
				id: Number(r.id),
				ref: String(r.ref || ""),
				status: String(r.status || "new"),
				created: String(r.created || ""),
				product: String(r.product || ""),
				slug: String(r.slug || ""),
				payload: p
			};
		});
		nreq = quotes.filter((x) => x.status === "new").length;
	} catch {}
	const website = fieldV(rec.data, "website");
	const country = fieldV(rec.data, "country");
	const city = fieldV(rec.data, "city");
	const arr = (k) => {
		const v = fieldAny(rec.data, k);
		return Array.isArray(v) ? v.map(String) : v ? [String(v)] : [];
	};
	const locsRaw = fieldAny(rec.data, "locations");
	const locations = Array.isArray(locsRaw) ? locsRaw : [];
	const imgRaw = fieldAny(rec.data, "image");
	const image = typeof imgRaw === "string" ? imgRaw : imgRaw && typeof imgRaw === "object" && "v" in imgRaw ? String(imgRaw.v || "") : "";
	return {
		tab: section,
		tabs: TABS.map(([k, label]) => ({
			key: k,
			label: k === "requests" && nreq ? `Requests (${nreq})` : label,
			href: k === "info" ? `/manage/${rec.slug}` : `/manage/${rec.slug}/${k}`
		})),
		rec: {
			id: rec.id,
			slug: rec.slug,
			name: rec.name,
			type: rec.type,
			type_label: TYPE_LABELS[rec.type]?.label || rec.type,
			summary: rec.summary,
			body: rec.body,
			website,
			country,
			city,
			open_to: arr("open_to"),
			open_note: fieldV(rec.data, "open_note"),
			roles: arr("roles"),
			founded: fieldV(rec.data, "founded"),
			stage: fieldV(rec.data, "stage"),
			employees: fieldV(rec.data, "employees"),
			careers: fieldV(rec.data, "careers"),
			linkedin: fieldV(rec.data, "linkedin"),
			x: fieldV(rec.data, "x"),
			github: fieldV(rec.data, "github"),
			huggingface: fieldV(rec.data, "huggingface"),
			email: fieldV(rec.data, "email"),
			locations,
			image: image || fieldV(rec.data, "image")
		},
		owned: owned.map((o) => ({
			id: o.id,
			slug: o.slug,
			name: o.name
		})),
		owners: owners || [],
		leaders,
		labs: labsOf(rec.data),
		connections,
		conn_help: CONN_HELP,
		conn_label: CONN_LABEL,
		posts,
		jobs,
		products,
		highlights,
		candidates: cand,
		quotes,
		nreq,
		logged: auth.logged,
		can_edit: true
	};
}
async function postManage(c, slug, section = "info") {
	const rec = await orgOf(c, slug);
	if (!rec || !await canManage(c, rec.id)) return c.json({ error: "Not found" }, 404);
	const auth = c.get("auth");
	const ct = c.req.header("content-type") || "";
	let file = null;
	let all;
	if (ct.includes("multipart/form-data")) {
		const raw = await c.req.parseBody({ all: true });
		all = {};
		for (const [k, v] of Object.entries(raw)) {
			if (v instanceof File) {
				if (k === "image" || k === "file") file = v;
				continue;
			}
			all[k] = (Array.isArray(v) ? v : [v]).map((x) => String(x ?? "")).filter((x) => !(x instanceof Object));
		}
	} else all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	const many = (k) => (all[k] || []).map((x) => x.trim()).filter(Boolean);
	const base = {
		name: rec.name,
		summary: rec.summary,
		body: rec.body,
		data: rec.data
	};
	let payload = { ...base };
	let next = `/manage/${slug}`;
	if (section === "info" || section === "page" || !section) {
		const name = (g("name") || rec.name).slice(0, 200);
		const summary = g("summary");
		const body = g("body");
		const data = { ...rec.data };
		const setV = (k, v) => {
			if (v === "" || v == null || Array.isArray(v) && !v.length) delete data[k];
			else data[k] = {
				...data[k] && typeof data[k] === "object" && !Array.isArray(data[k]) ? data[k] : {},
				v
			};
		};
		for (const k of [
			"website",
			"country",
			"city",
			"founded",
			"stage",
			"employees",
			"open_note",
			"careers",
			"linkedin",
			"x",
			"github",
			"huggingface",
			"email"
		]) setV(k, g(k));
		setV("roles", many("roles"));
		setV("open_to", many("open_to"));
		const kinds = all["f.locations.kind"] || [];
		const addresses = all["f.locations.address"] || [];
		const lats = all["f.locations.lat"] || [];
		const lons = all["f.locations.lon"] || [];
		const srcs = all["f.locations.src"] || [];
		const locs = [];
		for (let i = 0; i < Math.max(kinds.length, addresses.length); i++) {
			const address = (addresses[i] || "").trim();
			if (!address && !(lats[i] || "").trim()) continue;
			const loc = {
				kind: (kinds[i] || "Office").trim() || "Office",
				address,
				lat: (lats[i] || "").trim(),
				lon: (lons[i] || "").trim(),
				src: (srcs[i] || "").trim()
			};
			if (address && (!loc.lat || !loc.lon)) {
				const hit = await geocode(address);
				if (hit) {
					loc.lat = String(hit.lat);
					loc.lon = String(hit.lon);
				}
			}
			locs.push(loc);
		}
		setV("locations", locs);
		if (file && c.env.MEDIA) {
			const typ = (file.type || "").toLowerCase();
			const ext = typ.includes("png") ? "png" : typ.includes("webp") ? "webp" : typ.includes("gif") ? "gif" : "jpg";
			const key = `orgs/${rec.id}.${ext}`;
			await c.env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: typ || "image/" + ext } });
			setV("image", "/media/" + key);
		} else if (g("image_url")) setV("image", g("image_url"));
		else if (g("image_clear") === "1") delete data.image;
		payload = {
			name,
			summary,
			body,
			data
		};
		next = `/manage/${slug}?sent=1`;
	} else if (section === "leadership") {
		const names = all["lead.name"] || [];
		const titles = all["lead.title"] || [];
		const leaders = [];
		const seen = /* @__PURE__ */ new Set();
		names.forEach((n, i) => {
			const name = (n || "").trim();
			if (!name || seen.has(name.toLowerCase())) return;
			seen.add(name.toLowerCase());
			leaders.push({
				name: name.slice(0, 120),
				title: (titles[i] || "").trim().slice(0, 80)
			});
		});
		payload = {
			...base,
			data: { ...rec.data },
			leaders: leaders.slice(0, 30)
		};
		next = `/manage/${slug}/leadership?sent=1`;
	} else if (section === "labs") {
		const labs = labsOf(rec.data).map((x) => ({ ...x }));
		const act = g("act");
		const i = g("i") && /^\d+$/.test(g("i")) ? Number(g("i")) : null;
		const renames = [];
		if (act === "add" || act === "save") {
			const entry = {};
			for (const k of LAB_KEYS) entry[k] = g("lab." + k).slice(0, k === "url" ? 400 : k === "summary" ? 300 : 160);
			if (entry.url && !/^https?:\/\//i.test(entry.url)) entry.url = "https://" + entry.url;
			if (!entry.name) return jsonOrRedirect(c, `/manage/${slug}/labs?add=1`);
			if (act === "save" && i != null && i < labs.length) {
				const old = labs[i].name;
				labs[i] = {
					...labs[i],
					...entry
				};
				if (old !== entry.name) renames.push([old, entry.name]);
			} else if (!labs.some((x) => x.name.toLowerCase() === entry.name.toLowerCase())) labs.push(entry);
		} else if (act === "delete" && i != null && i < labs.length) labs.splice(i, 1);
		payload = {
			...base,
			data: {},
			only: ["labs"],
			labs,
			lab_renames: renames
		};
		next = `/manage/${slug}/labs?sent=1`;
	} else if (section === "connections") {
		const conns = {};
		for (const rel of CONNECTION_RELS) {
			const items = [];
			const seen = /* @__PURE__ */ new Set();
			for (const token of many("rel." + rel)) {
				const oid = await resolveOrg(c.env.DB, token, rec.id);
				if (!oid || seen.has(oid)) continue;
				seen.add(oid);
				const note = g(`relnote.${rel}.${oid}`) || g(`relnote.${rel}.${token}`);
				items.push([oid, note.slice(0, 120)]);
			}
			conns[rel] = items.slice(0, 60);
		}
		payload = {
			...base,
			data: { ...rec.data },
			connections: conns
		};
		next = `/manage/${slug}/connections?sent=1`;
	} else if (section === "highlights") {
		const allowed = /* @__PURE__ */ new Set();
		const { results } = await c.env.DB.prepare("SELECT src AS id FROM links WHERE dst=? UNION SELECT dst AS id FROM links WHERE src=?").bind(rec.id, rec.id).all();
		for (const r of results || []) allowed.add(Number(r.id));
		const hl = [];
		for (const token of many("rel.highlights")) {
			const hid = Number(token);
			if (!hid || !allowed.has(hid) || hl.some(([id]) => id === hid)) continue;
			hl.push([hid, g(`relnote.highlights.${hid}`).slice(0, 120)]);
		}
		payload = {
			...base,
			highlights: hl.slice(0, 3)
		};
		next = `/manage/${slug}/highlights?sent=1`;
	} else return c.json({ error: "Unknown section" }, 404);
	await submitAndMaybeApply(c.env.DB, auth, "company_edit", rec.id, payload);
	return jsonOrRedirect(c, next);
}
async function postJobToggle(c, id) {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	const row = await c.env.DB.prepare("SELECT * FROM records WHERE id=? AND type='job'").bind(Number(id)).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	const rec = loadRow(row);
	const link = await c.env.DB.prepare("SELECT dst FROM links WHERE src=? AND rel IN ('company','about') ORDER BY id LIMIT 1").bind(rec.id).first();
	const cid = link ? Number(link.dst) : 0;
	if (!cid || !await canManage(c, cid)) return c.json({ error: "Not found" }, 404);
	const data = { ...rec.data };
	data.status = { v: (fieldV(data, "status") || "Open") === "Open" ? "Closed" : "Open" };
	await c.env.DB.prepare("UPDATE records SET data=?, updated=? WHERE id=?").bind(JSON.stringify(data), (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "), rec.id).run();
	return jsonOrRedirect(c, `/manage/${(await c.env.DB.prepare("SELECT slug FROM records WHERE id=?").bind(cid).first())?.slug || ""}/jobs`);
}
// backend/worker/src/admin_misc.ts
async function emailAdminPayload(c, msg = "") {
	const smtp = await smtpSettings(c.env.DB, c.env);
	const site = (c.env.EP_SITE_URL || await setting$1(c.env.DB, "site_url") || "").replace(/\/$/, "");
	return {
		...smtp,
		password: smtp.password ? "(set)" : "",
		site_url: site,
		msg,
		site_name: SITE_NAME,
		from_env: mailFromEnv(c.env)
	};
}
async function postEmailAdmin(c) {
	const all = await formAll(c);
	const g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	if (mailFromEnv(c.env)) {
		const p = await emailAdminPayload(c, "Nothing changed: the mail server comes from the environment.");
		return c.json({
			ok: true,
			...p,
			next: "/admin/email"
		});
	}
	for (const k of [
		"host",
		"port",
		"security",
		"user",
		"from",
		"from_name"
	]) await setSetting(c.env.DB, "smtp_" + k, g(k).slice(0, 200));
	if (g("password")) await setSetting(c.env.DB, "smtp_password", g("password").slice(0, 200));
	if (g("site_url").startsWith("http://") || g("site_url").startsWith("https://")) await setSetting(c.env.DB, "site_url", g("site_url").slice(0, 200));
	const p = await emailAdminPayload(c, "Saved.");
	return c.json({
		ok: true,
		...p,
		next: "/admin/email"
	});
}
async function postEmailTest(c) {
	const to = (((await formAll(c)).to || [""]).slice(-1)[0] || "").trim();
	const err = await sendMail(c.env.DB, c.env, {
		to,
		subject: `${SITE_NAME}: test email`,
		html: `<p>Email sending works on ${SITE_NAME}.</p>`,
		text: "Email sending works."
	});
	const p = await emailAdminPayload(c, err || `Test email sent to ${to}.`);
	return c.json({
		ok: !err,
		...p,
		next: "/admin/email"
	});
}
async function stickersPayload(c, msg = "", error = "") {
	let pack = [];
	try {
		pack = JSON.parse(await setting$1(c.env.DB, "stickers") || "[]");
	} catch {
		pack = [];
	}
	return {
		pack,
		msg,
		error
	};
}
async function postStickers(c) {
	const ct = c.req.header("content-type") || "";
	let file = null;
	let g = (k) => "";
	if (ct.includes("multipart/form-data")) {
		const raw = await c.req.parseBody();
		g = (k) => String(raw[k] ?? "").trim();
		const f = raw.file;
		if (f instanceof File) file = f;
	} else {
		const all = await formAll(c);
		g = (k) => ((all[k] || [""]).slice(-1)[0] || "").trim();
	}
	let pack = [];
	try {
		pack = JSON.parse(await setting$1(c.env.DB, "stickers") || "[]");
	} catch {
		pack = [];
	}
	const act = g("action");
	let msg = "", error = "";
	if (act === "add") {
		const name = g("name").toLowerCase();
		if (!/^[a-z0-9_-]{1,24}$/.test(name)) error = "Use 1 to 24 lowercase letters, numbers, - or _ for the code.";
		else if (pack.some((x) => x.name === name)) error = `There is already a sticker called :${name}:.`;
		else {
			const id = bytesToHex(randomBytes(4));
			let url = g("url");
			if (file) {
				if (file.size > 6291456) error = "Use a PNG, GIF or WebP image under 6 MB.";
				else {
					const typ = (file.type || "").toLowerCase();
					const ext = typ.includes("gif") ? "gif" : typ.includes("webp") ? "webp" : typ.includes("png") ? "png" : (file.name.split(".").pop() || "").toLowerCase();
					if (![
						"png",
						"gif",
						"webp"
					].includes(ext)) error = "Use a PNG, GIF or WebP image under 6 MB.";
					else if (!c.env.MEDIA) error = "Media storage is not configured.";
					else {
						const key = `stickers/${id}.${ext}`;
						await c.env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: typ || "image/" + ext } });
						url = "/media/" + key;
					}
				}
			} else if (!url || !/\.(png|gif|webp)(\?|$)/i.test(url)) error = "Choose a PNG, GIF or WebP file, or give an image URL.";
			if (!error && url) {
				pack.push({
					id,
					name,
					url
				});
				msg = `Added :${name}:.`;
			}
		}
	} else if (act === "delete") {
		pack = pack.filter((x) => x.id !== g("id"));
		msg = "Deleted. Messages that used it now show a placeholder.";
	} else if (act === "up") {
		const i = pack.findIndex((x) => x.id === g("id"));
		if (i > 0) [pack[i - 1], pack[i]] = [pack[i], pack[i - 1]];
		msg = "Saved.";
	}
	if (!error) await setSetting(c.env.DB, "stickers", JSON.stringify(pack));
	const p = await stickersPayload(c, msg, error);
	return c.json({
		ok: !error,
		...p,
		next: "/admin/stickers"
	});
}
async function focusPayload(c, msg = "") {
	let areas = [];
	try {
		const saved = JSON.parse(await setting$1(c.env.DB, "focus_areas") || "null");
		if (Array.isArray(saved) && saved.length) areas = saved.map(String);
	} catch {}
	if (!areas.length) areas = [...FOCUS_AREAS];
	return {
		areas,
		msg
	};
}
async function postFocus(c) {
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	let msg = "Saved.";
	if (g("reset")) {
		await c.env.DB.prepare("DELETE FROM settings WHERE key='focus_areas'").run();
		msg = "Back to the starting list.";
	} else {
		const lines = [];
		for (const raw of g("areas").split(/\n/)) {
			const x = raw.replace(/\s+/g, " ").trim().slice(0, 60);
			if (x && !lines.includes(x)) lines.push(x);
		}
		await setSetting(c.env.DB, "focus_areas", JSON.stringify(lines.slice(0, 60)));
	}
	const p = await focusPayload(c, msg);
	return c.json({
		ok: true,
		...p,
		next: "/admin/focus"
	});
}
// backend/worker/src/forgot.ts
function clientIp$1(c) {
	return (c.req.header("cf-connecting-ip") || c.req.header("x-forwarded-for") || "127.0.0.1").split(",")[0].trim();
}
var RESET_HOURS = 1;
async function makeLinkToken(db, uid, kind, email = "", hours = 1) {
	await ensureExtraSchema(db);
	const tok = token();
	const exp = new Date(Date.now() + hours * 36e5).toISOString().slice(0, 19).replace("T", " ");
	await db.prepare("UPDATE email_tokens SET used=1 WHERE user_id=? AND kind=? AND used=0").bind(uid, kind).run();
	await db.prepare("INSERT INTO email_tokens(token, user_id, kind, email, expires, created) VALUES(?,?,?,?,?,?)").bind(tokenHash(tok), uid, kind, email, exp, nowStamp()).run();
	return tok;
}
async function takeLinkToken(db, tok, kind) {
	await ensureExtraSchema(db);
	const row = await db.prepare("SELECT * FROM email_tokens WHERE token=? AND kind=? AND used=0").bind(tokenHash(tok || ""), kind).first();
	if (!row) return null;
	if ((/* @__PURE__ */ new Date(row.expires.replace(" ", "T") + "Z")).getTime() < Date.now()) return null;
	await db.prepare("UPDATE email_tokens SET used=1 WHERE token=?").bind(tokenHash(tok)).run();
	return {
		user_id: row.user_id,
		email: row.email
	};
}
async function forgotPayload(c, msg = "", err = "") {
	return {
		msg,
		err,
		mail_on: await mailOn(c.env.DB, c.env),
		site_name: SITE_NAME
	};
}
async function postForgot(c) {
	const all = await formAll(c);
	const who = ((all.who || [""]).slice(-1)[0] || "").trim();
	const done = "If that account has a confirmed email, a reset link is on its way. It works for one hour.";
	const ip = clientIp$1(c);
	if (MAIL_IP.blocked(ip)) {
		const p = await forgotPayload(c, "", "Too many requests from here. Try again later.");
		return wantsJson(c) ? c.json({
			error: p.err,
			...p
		}, 429) : c.json(p);
	}
	if (!await turnstileOk(c.env, (all["cf-turnstile-response"] || [""]).slice(-1)[0] || "", ip)) {
		const p = await forgotPayload(c, "", "Please complete the check and try again.");
		return wantsJson(c) ? c.json({
			error: p.err,
			...p
		}, 400) : c.json(p);
	}
	MAIL_IP.hit(ip);
	if (who && await mailOn(c.env.DB, c.env)) {
		const { results } = await c.env.DB.prepare("SELECT * FROM users WHERE disabled=0").all();
		for (const raw of results || []) {
			const u = raw;
			const pr = prefsOf(u);
			const em = String(pr.email || "");
			if (u.username.toLowerCase() === who.toLowerCase() || em.toLowerCase() === who.toLowerCase()) {
				if (em && pr.email_verified) {
					const tok = await makeLinkToken(c.env.DB, u.id, "reset", em, RESET_HOURS);
					const link = `${(c.env.EP_SITE_URL || await setting(c.env.DB, "site_url") || c.req.url.replace(/\/forgot.*$/, "")).replace(/\/$/, "")}/reset?t=${tok}`;
					await sendMail(c.env.DB, c.env, {
						to: em,
						subject: `${SITE_NAME}: reset your password`,
						text: `Reset your password: ${link}\n\nThe link works for one hour. If you didn't ask for this, ignore this email.`,
						html: `<p>Reset your password for ${SITE_NAME}:</p><p><a href="${link}">${link}</a></p><p>The link works for one hour. If you didn't ask for this, ignore this email: your password stays the same.</p>`
					});
				}
				break;
			}
		}
	}
	const p = await forgotPayload(c, done);
	return c.json(p);
}
async function resetPayload(c, err = "") {
	await ensureExtraSchema(c.env.DB);
	const tok = c.req.query("t") || "";
	const row = await c.env.DB.prepare("SELECT * FROM email_tokens WHERE token=? AND kind='reset' AND used=0").bind(tokenHash(tok)).first();
	if (!row || (/* @__PURE__ */ new Date(String(row.expires).replace(" ", "T") + "Z")).getTime() < Date.now()) return {
		expired: true,
		err: "This link has expired."
	};
	return {
		expired: false,
		t: tok,
		err
	};
}
async function postReset(c) {
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	const pw = g("password"), confirm = g("confirm"), tok = g("t");
	if (pw.length < 8) return c.json({
		error: "At least 8 characters.",
		t: tok
	}, 400);
	if (pw !== confirm) return c.json({
		error: "The two passwords don't match.",
		t: tok
	}, 400);
	const row = await takeLinkToken(c.env.DB, tok, "reset");
	if (!row) return c.json({
		error: "This link has expired.",
		expired: true
	}, 400);
	await c.env.DB.prepare("UPDATE users SET pw=? WHERE id=?").bind(hashPw(pw), row.user_id).run();
	await endOtherSessions(c.env.DB, row.user_id, "");
	const sid = await newSession(c.env.DB, row.user_id, clientIp$1(c), c.req.header("user-agent") || "");
	const https = c.req.url.startsWith("https:");
	const res = c.json({
		ok: true,
		next: "/account?reset=1"
	});
	res.headers.append("Set-Cookie", sidCookie(sid, https));
	return res;
}
// backend/worker/src/live/state.ts
var state_exports = /* @__PURE__ */ __exportAll({ randomToken: () => randomToken });
var DIRS = /* @__PURE__ */ new Set([
	"u",
	"d",
	"l",
	"r"
]);
var WALK_TOKEN_RE = /^[A-Za-z0-9_-]{16,64}$/;
function validToken(raw) {
	const s = String(raw || "");
	return WALK_TOKEN_RE.test(s) ? s : "";
}
function pub(k, v, t) {
	return {
		id: k,
		n: v.n,
		u: v.u || "",
		c: v.c,
		lk: v.lk,
		x: v.x,
		y: v.y,
		d: v.d,
		w: v.w || 0,
		ts: Math.round((v.ts || t) * 1e3) / 1e3,
		seq: v.seq || 0,
		says: v.says.filter((s) => t - s.ts < 30).slice(-3).map((s) => ({
			id: s.id,
			t: s.t,
			age: Math.round((t - s.ts) * 10) / 10
		}))
	};
}
var WalkWorld = class {
	rooms = /* @__PURE__ */ new Map();
	hold = /* @__PURE__ */ new Map();
	gone = /* @__PURE__ */ new Map();
	seq = 0;
	nextSeq() {
		this.seq += 1;
		return this.seq;
	}
	clearStale(t) {
		for (const [page, room] of this.rooms) {
			for (const [k, v] of room) if (t - v.ts > 8) room.delete(k);
			if (!room.size) this.rooms.delete(page);
		}
	}
	purgeCid(cid, keepPage) {
		let prev = null;
		for (const [page, room] of this.rooms) {
			if (page === keepPage) continue;
			const hit = room.get(cid);
			if (hit) {
				prev = hit;
				room.delete(cid);
			}
			if (!room.size) this.rooms.delete(page);
		}
		return prev;
	}
	peek(page, me, t = Date.now() / 1e3) {
		const room = this.rooms.get(page);
		if (!room) return [];
		const out = [];
		for (const [k, v] of room) {
			if (k === me || t - v.ts > 8) continue;
			out.push(pub(k, v, t));
		}
		return out;
	}
	snapshot(page, me, t = Date.now() / 1e3) {
		return {
			page,
			ts: Math.round(t * 1e3) / 1e3,
			others: this.peek(page, me, t),
			full: true
		};
	}
	/** Join / tick / leave. */
	tick(opts) {
		const t = opts.t ?? Date.now() / 1e3;
		const page = opts.page.startsWith("/") ? opts.page.slice(0, 200) : "/" + opts.page.slice(0, 199);
		const cid = opts.cid;
		let tok = validToken(opts.token);
		this.clearStale(t);
		const hold = this.hold.get(cid) || "";
		if (opts.leave) {
			if (hold && tok === hold) {
				this.hold.delete(cid);
				this.gone.set(cid, t);
				this.purgeCid(cid);
			}
			if (hold && tok && tok !== hold) return {
				ok: true,
				others: [],
				gone: "elsewhere"
			};
			return {
				ok: true,
				others: [],
				notifyPage: page
			};
		}
		let owns = Boolean(hold && tok && tok === hold);
		// The "hold" Durable Object already checked this walker owns its token. Each page has its own Durable
		// Object, and its memory is lost on restart, so trust that check here instead of asking for a new join.
		// Without this, a walker who changed page (or whose page restarted) kept walking but nobody saw them.
		if (!owns && opts.owned && tok) {
			this.hold.set(cid, tok);
			owns = true;
		}
		let taken = false;
		if (opts.join && !owns) {
			tok = validToken(opts.token) || randomToken();
			taken = Boolean(hold);
			this.hold.set(cid, tok);
			this.gone.delete(cid);
			owns = true;
		} else if (opts.join && owns) this.gone.delete(cid);
		if (!owns) return {
			ok: true,
			me: cid,
			others: [],
			gone: "elsewhere"
		};
		const prev = this.purgeCid(cid, page);
		if (prev) prev.says = [];
		let room = this.rooms.get(page);
		if (!room) {
			room = /* @__PURE__ */ new Map();
			this.rooms.set(page, room);
		}
		const lk = opts.look;
		let me = room.get(cid) || prev || {
			n: opts.name,
			u: opts.user || "",
			c: lk.b,
			lk,
			says: [],
			x: .2,
			y: 200,
			d: "r",
			last_say: 0,
			ts: t,
			seq: 0
		};
		const fx = (v, d, lo, hi) => typeof v === "number" && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d;
		me.x = fx(opts.x, me.x, 0, 1);
		// Width of the walker's page in px, so wide screens can show a phone walker in a centred column.
		me.w = Math.round(fx(opts.w, me.w || 0, 0, 1e4));
		me.y = fx(opts.y, me.y, 0, 1e5);
		if (opts.d && DIRS.has(opts.d)) me.d = opts.d;
		let err = "";
		let said;
		const say = epMeow(String(opts.say || "").replace(/\s+/g, " ").trim().slice(0, 140));
		if (say) {
			if (t - me.last_say < 1) err = "Slow down.";
			else {
				me.last_say = t;
				said = this.nextSeq();
				me.says = me.says.filter((s) => t - s.ts < 30).slice(-2).concat([{
					id: said,
					t: say,
					ts: t
				}]);
			}
		}
		me.ts = t;
		me.seq = this.nextSeq();
		me.n = opts.name;
		me.u = opts.user || "";
		me.c = lk.b;
		me.lk = lk;
		room.set(cid, me);
		return {
			ok: true,
			me: cid,
			token: tok,
			color: me.c,
			look: me.lk,
			others: [],
			said,
			error: err || void 0,
			taken,
			notifyPage: page,
			purgeFrom: prev ? void 0 : void 0
		};
	}
};
function randomToken() {
	const bytes = /* @__PURE__ */ new Uint8Array(18);
	crypto.getRandomValues(bytes);
	let s = "";
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	for (const b of bytes) s += chars[b % 64];
	return s;
}
var StreamCaps = class {
	max;
	maxPer;
	total = 0;
	by = /* @__PURE__ */ new Map();
	constructor(max = 200, maxPer = 4) {
		this.max = max;
		this.maxPer = maxPer;
	}
	acquire(key) {
		if (this.total >= this.max || (this.by.get(key) || 0) >= this.maxPer) return false;
		this.total += 1;
		this.by.set(key, (this.by.get(key) || 0) + 1);
		return true;
	}
	release(key) {
		this.total = Math.max(0, this.total - 1);
		const n = (this.by.get(key) || 0) - 1;
		if (n <= 0) this.by.delete(key);
		else this.by.set(key, n);
	}
};
/** Process-local world used when Durable Objects are not bound (Vitest). */
var memoryWorld = new WalkWorld();
var memoryCaps = new StreamCaps();
// backend/worker/src/live/routes.ts
function pageOf(raw) {
	let p = String(raw || "/").split("?")[0].slice(0, 200);
	if (!p.startsWith("/")) p = "/";
	return p;
}
function cidOf(auth) {
	return auth.user ? "u" + auth.user.id : "";
}
function slotKey(c) {
	const u = c.get("auth").user;
	return u ? "u:" + u.id : "ip:" + clientIp(c);
}
function clientIp(c) {
	return (c.req.header("cf-connecting-ip") || c.req.header("x-forwarded-for") || "127.0.0.1").split(",")[0].trim();
}
function liveNs(c) {
	return c.env.LIVE;
}
function pageStub(c, page) {
	const ns = liveNs(c);
	return ns ? ns.getByName("page:" + page) : null;
}
function holdStub(c) {
	const ns = liveNs(c);
	return ns ? ns.getByName("hold") : null;
}
function capsStub(c) {
	const ns = liveNs(c);
	return ns ? ns.getByName("caps") : null;
}
function chatStub(c, room) {
	const ns = liveNs(c);
	return ns ? ns.getByName("chat:" + room) : null;
}
function evStub(c, eid) {
	const ns = liveNs(c);
	return ns ? ns.getByName("event:" + eid) : null;
}
function jsonBody(c, all) {
	const g = (k) => (all[k] || [""]).slice(-1)[0];
	return g;
}
async function postWalk(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to place a character." }, 401);
	const all = await formAll(c);
	const g = jsonBody(c, all);
	const page = pageOf(g("page"));
	const cid = cidOf(auth);
	const tok = validToken(g("token"));
	const look = walkerLook(auth.user);
	g("join") === "1" || g("join") === "true" || all.join?.[0] === "true" || Boolean(all.join);
	const body = all;
	const flag = (k) => {
		const v = body[k]?.slice(-1)[0];
		return v === "1" || v === "true" || v === "on";
	};
	const leave = flag("leave");
	const isJoin = flag("join");
	const x = Number(g("x"));
	const y = Number(g("y"));
	const w = Number(g("w"));
	const input = {
		cid,
		name: auth.user.name || auth.user.username,
		user: auth.user.username,
		look,
		page,
		token: tok,
		join: isJoin,
		leave,
		x: Number.isFinite(x) ? x : void 0,
		y: Number.isFinite(y) ? y : void 0,
		w: Number.isFinite(w) ? w : void 0,
		d: g("d"),
		say: g("say")
	};
	const hold = holdStub(c);
	const pageDo = pageStub(c, page);
	if (leave) {
		if (hold) await hold.dropHold(cid, tok);
		else {
			const h = memoryWorld.hold.get(cid);
			if (h && tok === h) {
				memoryWorld.hold.delete(cid);
				memoryWorld.purgeCid(cid);
			}
		}
		if (pageDo) await pageDo.tick({
			...input,
			token: tok,
			leave: true
		});
		else memoryWorld.tick({
			...input,
			leave: true
		});
		return c.json({ ok: true });
	}
	let token = tok;
	let taken = false;
	let owns = false;
	let prevPage = "";
	if (hold) {
		const r = await hold.takeHold(cid, tok, page, isJoin);
		token = r.token;
		taken = r.taken;
		owns = r.owns;
		prevPage = r.prevPage;
	} else {
		const cur = memoryWorld.hold.get(cid) || "";
		owns = Boolean(cur && tok && tok === cur);
		if (isJoin && !owns) {
			token = randomToken();
			taken = Boolean(cur);
			memoryWorld.hold.set(cid, token);
			owns = true;
		} else token = tok || cur;
		if (!owns) return c.json({
			me: cid,
			others: [],
			gone: "elsewhere"
		});
	}
	if (hold && !owns) return c.json({
		me: cid,
		others: [],
		gone: "elsewhere"
	});
	if (hold && taken && prevPage && prevPage !== page) {
		const old = pageStub(c, prevPage);
		if (old) {
			await old.purge(cid);
			await old.sendTaken(cid, token);
		}
	} else if (hold && owns && prevPage && prevPage !== page) {
		// Walked to another page: remove the character from the old page straight away.
		const old = pageStub(c, prevPage);
		if (old) await old.purge(cid);
	}
	const wantOthers = g("stream") !== "1" && g("stream") !== "true";
	let out;
	if (pageDo) out = await pageDo.tick({
		...input,
		token,
		join: isJoin,
		owned: Boolean(hold && owns),
		wantOthers
	});
	else {
		out = memoryWorld.tick({
			...input,
			token,
			join: isJoin
		});
		if (wantOthers) out = {
			...out,
			others: memoryWorld.peek(page, cid)
		};
	}
	if (taken) {}
	const bodyOut = {
		me: cid,
		token: out.token || token,
		color: out.color || look.b,
		look: out.look || look,
		others: out.others || []
	};
	if (out.said) bodyOut.said = out.said;
	if (out.error) bodyOut.error = out.error;
	return c.json(bodyOut);
}
async function getWalkPeek(c) {
	const page = pageOf(c.req.query("page"));
	const me = cidOf(c.get("auth"));
	const stub = pageStub(c, page);
	const others = stub ? await stub.peek(page, "") : memoryWorld.peek(page, "");
	return c.json({ others });
}
async function getLiveWs(c) {
	if (c.req.header("upgrade")?.toLowerCase() !== "websocket") return c.text("Expected WebSocket", 426);
	const key = slotKey(c);
	const caps = capsStub(c);
	if (!(caps ? await caps.acquireCap(key) : memoryCaps.acquire(key))) return c.json({ error: "Too many live connections." }, 429);
	const page = pageOf(c.req.query("page"));
	const stub = pageStub(c, page);
	if (!stub) {
		if (caps) await caps.releaseCap(key);
		else memoryCaps.release(key);
		return c.json({ error: "Live rooms are not available." }, 503);
	}
	const room = c.req.query("room") === "lounge" ? "lounge" : "";
	if (room) {
		const chat = chatStub(c, room);
		if (chat) await chat.addSub("page:" + page);
	}
	const ev = Number(c.req.query("event") || 0);
	if (ev) {
		const evs = evStub(c, ev);
		if (evs) await evs.addSub("page:" + page);
	}
	const auth = c.get("auth");
	const url = new URL("https://do/ws");
	url.searchParams.set("name", "page:" + page);
	url.searchParams.set("page", page);
	url.searchParams.set("uid", String(auth.user?.id || 0));
	url.searchParams.set("cid", cidOf(auth));
	url.searchParams.set("ip", clientIp(c));
	url.searchParams.set("key", key);
	url.searchParams.set("room", room);
	if (ev) url.searchParams.set("event", String(ev));
	const headers = new Headers(c.req.raw.headers);
	headers.set("Upgrade", "websocket");
	return stub.fetch(new Request(url.toString(), {
		method: "GET",
		headers
	}));
}
function msgJson(r) {
	const created = String(r.created || "");
	return {
		id: Number(r.id),
		uid: Number(r.user_id || 0),
		name: String(r.name || ""),
		body: String(r.body || ""),
		t: created.slice(11, 16),
		d: created.slice(0, 10),
		pinned: Number(r.pinned || 0),
		deleted: Number(r.deleted || 0)
	};
}
async function getRoomPoll(c) {
	await ensureExtraSchema(c.env.DB);
	if ((c.req.query("room") || "lounge") !== "lounge") return c.json({ error: "bad room" }, 400);
	const cid = (c.req.query("cid") || "").replace(/[^\w-]/g, "").slice(0, 40);
	const t = Date.now() / 1e3;
	const auth = c.get("auth");
	if (cid) {
		await c.env.DB.prepare("INSERT INTO room_presence(room,cid,user_id,seen) VALUES(?,?,?,?) ON CONFLICT(room,cid) DO UPDATE SET user_id=excluded.user_id, seen=excluded.seen").bind("lounge", cid, auth.user?.id ?? null, t).run();
		await c.env.DB.prepare("DELETE FROM room_presence WHERE seen<?").bind(t - 3600).run();
	}
	const since = Number(c.req.query("since") || 0) || 0;
	const q = since === 0 ? "SELECT * FROM (SELECT * FROM room_chat WHERE room=? AND deleted=0 ORDER BY id DESC LIMIT 200) ORDER BY id" : "SELECT * FROM room_chat WHERE room=? AND rev>? ORDER BY id";
	const { results } = since === 0 ? await c.env.DB.prepare(q).bind("lounge").all() : await c.env.DB.prepare(q).bind("lounge", since).all();
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0) AS n FROM room_chat WHERE room=?").bind("lounge").first();
	const hereRows = await c.env.DB.prepare("SELECT user_id FROM room_presence WHERE room=? AND seen>?").bind("lounge", t - 40).all();
	const members = {};
	let guests = 0;
	for (const raw of hereRows.results || []) {
		const uid = Number(raw.user_id || 0);
		if (!uid) {
			guests += 1;
			continue;
		}
		if (members[uid]) continue;
		const u = await c.env.DB.prepare("SELECT name FROM users WHERE id=?").bind(uid).first();
		if (u) members[uid] = {
			n: u.name,
			t: ""
		};
	}
	const here = Object.values(members).sort((a, b) => a.n.localeCompare(b.n));
	const n = here.length + guests;
	return c.json({
		messages: (results || []).map((r) => msgJson(r)),
		rev: Number(revRow?.n || 0),
		locked: false,
		status: "",
		here,
		guests,
		counts: { lounge: n }
	});
}
async function postRoom(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to chat." }, 401);
	const all = await formAll(c);
	const g = (k) => (all[k] || [""]).slice(-1)[0] || "";
	if ((g("room") || "lounge") !== "lounge") return c.json({ error: "bad room" }, 400);
	let text = g("body").trim().slice(0, 1e3);
	if (!text) return c.json({ error: "Empty message." }, 400);
	const last = await c.env.DB.prepare("SELECT MAX(ts) AS t FROM room_chat WHERE user_id=?").bind(auth.user.id).first();
	if (last?.t && Date.now() / 1e3 - Number(last.t) < 1) return c.json({ error: "Slow down." }, 429);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email to chat. The link is in your inbox, or resend it from Settings." }, 403);
	if (!text.startsWith(":sticker:")) {
		const problem = await checkText(c.env.DB, text, auth);
		if (problem) return c.json({ error: problem }, 400);
		text = epMeow(text);
	}
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM room_chat WHERE room=?").bind("lounge").first();
	const rev = Number(revRow.n);
	const now = nowStamp();
	const ins = await c.env.DB.prepare("INSERT INTO room_chat(room,user_id,name,body,created,ts,rev) VALUES(?,?,?,?,?,?,?)").bind("lounge", auth.user.id, auth.user.name || auth.user.username, text, now, Date.now() / 1e3, rev).run();
	const payload = {
		room: "lounge",
		rev,
		messages: [msgJson(await c.env.DB.prepare("SELECT * FROM room_chat WHERE id=?").bind(ins.meta.last_row_id).first())]
	};
	const chat = chatStub(c, "lounge");
	if (chat) await chat.notifyChat("chat", payload);
	return c.json({ ok: true });
}
async function postRoomMsg(c) {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const mid = Number(c.req.param("id"));
	const row = await c.env.DB.prepare("SELECT * FROM room_chat WHERE id=?").bind(mid).first();
	if (!row) return c.json({ error: "Not found" }, 404);
	if (!(Number(row.user_id) === auth.user.id) && !can(auth, "review") && !auth.is_admin) return c.json({ error: "Not found" }, 404);
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM room_chat WHERE room=?").bind(row.room).first();
	await c.env.DB.prepare("UPDATE room_chat SET deleted=1, rev=? WHERE id=?").bind(revRow.n, mid).run();
	const chat = chatStub(c, String(row.room));
	if (chat) await chat.notifyChat("chat", {
		room: row.room,
		rev: revRow.n,
		messages: [{
			...msgJson(row),
			deleted: 1
		}]
	});
	return c.json({ ok: true });
}
async function getEvPoll(c) {
	await ensureExtraSchema(c.env.DB);
	const eid = Number(c.req.param("eid"));
	if (!await c.env.DB.prepare("SELECT id, data, type FROM records WHERE id=? AND type='event'").bind(eid).first()) return c.json({ error: "Not found" }, 404);
	const cid = (c.req.query("cid") || "").replace(/[^\w-]/g, "").slice(0, 40);
	const t = Date.now() / 1e3;
	const auth = c.get("auth");
	if (cid) {
		await c.env.DB.prepare("INSERT INTO presence(event_id,cid,user_id,name,seen) VALUES(?,?,?,?,?) ON CONFLICT(event_id,cid) DO UPDATE SET user_id=excluded.user_id,name=excluded.name,seen=excluded.seen").bind(eid, cid, auth.user?.id ?? null, auth.user?.name ?? null, t).run();
		await c.env.DB.prepare("DELETE FROM presence WHERE seen<?").bind(t - 3600).run();
	}
	const since = Number(c.req.query("since") || 0) || 0;
	const { results } = since === 0 ? await c.env.DB.prepare("SELECT * FROM (SELECT * FROM chat WHERE event_id=? AND deleted=0 ORDER BY id DESC LIMIT 300) ORDER BY id").bind(eid).all() : await c.env.DB.prepare("SELECT * FROM chat WHERE event_id=? AND rev>? ORDER BY id").bind(eid, since).all();
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0) AS n FROM chat WHERE event_id=?").bind(eid).first();
	const hereRows = await c.env.DB.prepare("SELECT user_id, name FROM presence WHERE event_id=? AND seen>?").bind(eid, t - 40).all();
	const members = {};
	let guests = 0;
	for (const raw of hereRows.results || []) {
		const r = raw;
		if (!r.user_id) {
			guests += 1;
			continue;
		}
		if (!members[r.user_id]) members[r.user_id] = {
			n: String(r.name || ""),
			t: ""
		};
	}
	return c.json({
		event: eid,
		rev: Number(revRow?.n || 0),
		locked: false,
		messages: (results || []).map((r) => msgJson(r)),
		here: Object.values(members).sort((a, b) => a.n.localeCompare(b.n)),
		guests
	});
}
async function postEv(c) {
	await ensureExtraSchema(c.env.DB);
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in to chat." }, 401);
	const eid = Number(c.req.param("eid"));
	if (!await c.env.DB.prepare("SELECT id FROM records WHERE id=? AND type='event'").bind(eid).first()) return c.json({ error: "Not found" }, 404);
	const text = epMeow((((await formAll(c)).body || [""]).slice(-1)[0] || "").trim().slice(0, 1e3));
	if (!text) return c.json({ error: "Empty message." }, 400);
	const last = await c.env.DB.prepare("SELECT MAX(ts) AS t FROM chat WHERE user_id=? AND event_id=?").bind(auth.user.id, eid).first();
	if (last?.t && Date.now() / 1e3 - Number(last.t) < 1) return c.json({ error: "Slow down." }, 429);
	if (await needsVerified(c)) return c.json({ error: "Confirm your email to chat." }, 403);
	const problem = await checkText(c.env.DB, text, auth);
	if (problem) return c.json({ error: problem }, 400);
	const revRow = await c.env.DB.prepare("SELECT COALESCE(MAX(rev),0)+1 AS n FROM chat WHERE event_id=?").bind(eid).first();
	const now = nowStamp();
	const ins = await c.env.DB.prepare("INSERT INTO chat(event_id,user_id,name,body,created,ts,rev) VALUES(?,?,?,?,?,?,?)").bind(eid, auth.user.id, auth.user.name || auth.user.username, text, now, Date.now() / 1e3, revRow.n).run();
	const row = await c.env.DB.prepare("SELECT * FROM chat WHERE id=?").bind(ins.meta.last_row_id).first();
	const payload = {
		event: eid,
		rev: revRow.n,
		messages: [msgJson(row)]
	};
	const evs = evStub(c, eid);
	if (evs) await evs.notifyChat("evchat", payload);
	return c.json({ ok: true });
}
// backend/worker/src/live/hub.ts
var LiveHub = class extends DurableObject {
	world = new WalkWorld();
	caps = new StreamCaps();
	/** chat:lounge / event:N subscribers: page-DO names */
	subs = /* @__PURE__ */ new Set();
	constructor(ctx, env) {
		super(ctx, env);
		this.ctx.setWebSocketAutoResponse(new WebSocketRequestResponsePair("ping", "pong"));
	}
	nameOf(req) {
		return new URL(req?.url || "https://do/").searchParams.get("name") || "unknown";
	}
	async fetch(request) {
		const url = new URL(request.url);
		if (request.headers.get("Upgrade") !== "websocket") return new Response("Expected WebSocket", { status: 426 });
		const pair = new WebSocketPair();
		const [client, server] = Object.values(pair);
		const att = {
			uid: Number(url.searchParams.get("uid") || 0),
			cid: url.searchParams.get("cid") || "",
			ip: url.searchParams.get("ip") || "",
			key: url.searchParams.get("key") || "ip:0",
			room: url.searchParams.get("room") || "",
			page: url.searchParams.get("page") || "/",
			ev: Number(url.searchParams.get("event") || 0)
		};
		this.ctx.acceptWebSocket(server);
		server.serializeAttachment(att);
		const snap = this.world.snapshot(att.page, "");
		try {
			server.send(JSON.stringify({
				type: "walk",
				id: this.world.seq,
				data: snap
			}));
		} catch {}
		return new Response(null, {
			status: 101,
			webSocket: client
		});
	}
	async webSocketMessage(ws, message) {
		if (typeof message !== "string") return;
		if (message === "ping") {
			try {
				ws.send("pong");
			} catch {}
			return;
		}
		let msg = {};
		try {
			msg = JSON.parse(message);
		} catch {
			return;
		}
		const typ = String(msg.type || "");
		ws.deserializeAttachment();
		if (typ === "walk") return;
		if (typ === "presence") {}
	}
	async webSocketClose(ws) {
		const att = ws.deserializeAttachment() || {};
		if (att.key) try {
			const caps = this.env.LIVE ? this.env.LIVE.getByName("caps") : null;
			if (caps && this.ctx.id.toString() !== this.env.LIVE.idFromName("caps").toString()) await caps.releaseCap(att.key);
			else this.caps.release(att.key);
		} catch {}
	}
	async webSocketError(ws) {
		await this.webSocketClose(ws);
	}
	async tick(input) {
		const out = this.world.tick(input);
		out.others = input.wantOthers ? this.world.peek(input.page, input.cid) : [];
		await this.broadcastWalk(input.page);
		return out;
	}
	async peek(page, me) {
		return this.world.peek(page, me);
	}
	async purge(cid) {
		this.world.purgeCid(cid);
		await this.broadcastWalk(this.pageName());
	}
	async sendTaken(cid, token) {
		await this.broadcast("taken", {
			gone: "elsewhere",
			token,
			cid
		}, (att) => att.cid === cid);
	}
	async broadcast(type, data, filter) {
		const payload = JSON.stringify({
			type,
			id: this.world.seq,
			data
		});
		for (const ws of this.ctx.getWebSockets()) try {
			const att = ws.deserializeAttachment() || {};
			if (filter && !filter(att)) continue;
			ws.send(payload);
		} catch {}
	}
	/** Send each socket a walk snapshot that never includes that socket's own walker. */
	async broadcastWalk(page) {
		for (const ws of this.ctx.getWebSockets()) try {
			const att = ws.deserializeAttachment() || {};
			// Your own character is sent too, so your other devices can show it. The device that is walking skips it.
			const snap = this.world.snapshot(page, "");
			ws.send(JSON.stringify({
				type: "walk",
				id: this.world.seq,
				data: snap
			}));
		} catch {}
	}
	async takeHold(cid, token, page, join) {
		const cur = await this.ctx.storage.get("hold:" + cid) || null;
		let tok = token;
		let owns = Boolean(cur && token && cur.token === token);
		let taken = false;
		let prevPage = cur?.page || "";
		if (join && !owns) {
			const { randomToken } = await Promise.resolve().then(() => state_exports);
			tok = randomToken();
			taken = Boolean(cur?.token);
			await this.ctx.storage.put("hold:" + cid, {
				token: tok,
				page
			});
			owns = true;
		} else if (join && owns) await this.ctx.storage.put("hold:" + cid, {
			token: tok,
			page
		});
		else if (owns && page && page !== prevPage) await this.ctx.storage.put("hold:" + cid, {
			token: tok,
			page
		});
		return {
			token: tok,
			owns,
			taken,
			prevPage
		};
	}
	async dropHold(cid, token) {
		const cur = await this.ctx.storage.get("hold:" + cid) || null;
		if (!cur) return true;
		if (token && token !== cur.token) return false;
		await this.ctx.storage.delete("hold:" + cid);
		return true;
	}
	async holdPage(cid) {
		return (await this.ctx.storage.get("hold:" + cid) || null)?.page || "";
	}
	async acquireCap(key) {
		return this.caps.acquire(key);
	}
	async releaseCap(key) {
		this.caps.release(key);
	}
	async addSub(pageName) {
		this.subs.add(pageName);
		await this.ctx.storage.put("subs", [...this.subs]);
	}
	async removeSub(pageName) {
		this.subs.delete(pageName);
		await this.ctx.storage.put("subs", [...this.subs]);
	}
	async notifyChat(type, data) {
		const stored = await this.ctx.storage.get("subs") || [...this.subs];
		for (const s of stored) try {
			await this.env.LIVE.getByName(s).broadcast(type, data);
		} catch {}
		await this.broadcast(type, data);
	}
	pageName() {
		for (const ws of this.ctx.getWebSockets()) {
			const att = ws.deserializeAttachment() || {};
			if (att.page) return att.page;
		}
		return "/";
	}
};
// backend/worker/src/index.ts
var api = new Hono();
api.get("/healthz", (c) => c.json({
	ok: true,
	service: "embodiment-place-worker"
}));
api.get("/meta", (c) => {
	const payload = {
		themes: THEME_MENU,
		nav: NAV,
		hardware: {
			robots: HW_CATEGORIES.filter((x) => x.tab === "robots").map(({ key, label, plural }) => ({
				key,
				label,
				plural
			})),
			hardware: HW_CATEGORIES.filter((x) => x.tab === "hardware").map(({ key, label, plural, group }) => ({
				key,
				label,
				plural,
				group: group || "Other"
			}))
		},
		softwareKinds: SOFTWARE_KINDS,
		orgGroups: ORG_GROUPS.map(({ key, label, blurb }) => ({
			key,
			label,
			blurb
		}))
	};
	return c.json(payload);
});
api.get("/home", async (c) => {
	const filter = c.req.query("f") || "all";
	const original = c.req.query("orig") === "1";
	const before = c.req.query("before") || "";
	return c.json(await homePayload(c.env.DB, filter, original, before));
});
api.get("/ticker", async (c) => c.json({ items: await tickerItems(c.env.DB) }));
api.get("/board", async (c) => c.json(await boardPayload(c.env.DB)));
api.get("/highlights", async (c) => c.json(await highlightsOf(c.env.DB)));
api.get("/orgs", async (c) => {
	const group = c.req.query("group") || "";
	const asMap = c.req.query("map") === "1" || group === "map";
	return c.json(await orgsPayload(c.env.DB, group, asMap));
});
api.get("/geocode", apiGeocode);
api.get("/address", apiAddress);
api.get("/list/:key", async (c) => {
	const tkey = c.req.param("key");
	const kind = c.req.query("kind") || "";
	const when = c.req.query("when") || "";
	const before = c.req.query("before") || "";
	const payload = await listPayload(c.env.DB, tkey, kind, when, before);
	if ("error" in payload) return c.json(payload, 404);
	return c.json(payload);
});
// epAutoNews: admin toggle "Automatic updates" per organisation (table auto_news). A daily job reads the enabled ones.
var EP_AUTONEWS_TYPES = [
	"company",
	"university",
	"lab"
];
async function epAutoNewsOn(db, rid) {
	try {
		return Boolean(Number((await db.prepare("SELECT enabled FROM auto_news WHERE record_id=?").bind(rid).first())?.enabled || 0));
	} catch {
		return false;
	}
}
async function epAutoNewsInfo(db, rid) {
	try {
		const r = await db.prepare("SELECT feed, last_run, last_note FROM auto_news WHERE record_id=?").bind(rid).first();
		return r ? {
			autonews_feed: String(r.feed || ""),
			autonews_run: r.last_run ?? null,
			autonews_note: String(r.last_note || "")
		} : {};
	} catch {
		return {};
	}
}
api.post("/autonews/:slug", async (c) => {
	const auth = c.get("auth");
	if (!auth.is_admin) return c.json({ error: "Not found" }, 404);
	const row = await c.env.DB.prepare("SELECT id, type FROM records WHERE slug=?").bind(c.req.param("slug")).first();
	if (!row || !EP_AUTONEWS_TYPES.includes(String(row.type))) return c.json({ error: "Not found" }, 404);
	const rid = Number(row.id);
	const on = !await epAutoNewsOn(c.env.DB, rid);
	await c.env.DB.prepare("INSERT INTO auto_news(record_id,enabled,updated,updated_by) VALUES(?,?,?,?) ON CONFLICT(record_id) DO UPDATE SET enabled=excluded.enabled, updated=excluded.updated, updated_by=excluded.updated_by").bind(rid, on ? 1 : 0, nowStamp(), auth.user?.id ?? null).run();
	return c.json({
		ok: true,
		on
	});
});
// epAutoNewsCron: once a day for each organisation with automatic updates on, read its news feed (RSS or Atom)
// and publish items from the last 36 hours as Repost posts linked to it. Runs on the hourly cron, a few organisations
// per tick (EP_AN_PER_TICK) so each run stays well inside the Worker's subrequest limit.
var EP_AN_PER_TICK = 5;
var EP_AN_MAX_NEW = 3;
var EP_AN_WINDOW_H = 36;
var EP_AN_UA = "Mozilla/5.0 (compatible; embodiment.place news reader; +https://embodiment.place/about)";
var EP_AN_GUESSES = [
	"/feed",
	"/rss.xml",
	"/feed.xml",
	"/blog/rss.xml",
	"/news/rss.xml"
];
function epAnDecode(t) {
	return String(t || "").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d))).replace(/&(nbsp|amp|lt|gt|quot|apos|rsquo|lsquo|rdquo|ldquo|hellip|mdash|ndash);/g, (_, n) => ({
		nbsp: " ",
		amp: "&",
		lt: "<",
		gt: ">",
		quot: "\"",
		apos: "'",
		rsquo: "’",
		lsquo: "‘",
		rdquo: "”",
		ldquo: "“",
		hellip: "…",
		mdash: "—",
		ndash: "–"
	})[n]);
}
function epAnText(html) {
	return epAnDecode(epAnDecode(html).replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function epAnTag(xml, names) {
	for (const n of names) {
		const m = xml.match(new RegExp(`<(?:[\\w-]+:)?${n}\\b[^>]*>([\\s\\S]*?)</(?:[\\w-]+:)?${n}>`, "i"));
		if (m && m[1].trim()) return m[1];
	}
	return "";
}
function epAnClip(t, max) {
	if (t.length <= max) return t;
	const cut = t.slice(0, max - 1);
	const sp = cut.lastIndexOf(" ");
	return (sp > max * .6 ? cut.slice(0, sp) : cut).replace(/[\s,.;:]+$/, "") + "…";
}
function epAnCanon(u, base) {
	try {
		const x = new URL(String(u || "").trim(), base);
		if (!/^https?:$/.test(x.protocol)) return "";
		x.hash = "";
		x.hostname = x.hostname.toLowerCase();
		for (const k of [...x.searchParams.keys()]) if (/^(utm_|mc_|fbclid|gclid|ref$|source$)/i.test(k)) x.searchParams.delete(k);
		if (x.pathname.length > 1) x.pathname = x.pathname.replace(/\/+$/, "");
		return x.toString();
	} catch {
		return "";
	}
}
function epAnItems(xml, feedUrl) {
	const out = [];
	const blocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];
	for (const b of blocks.slice(0, 50)) {
		const title = epAnClip(epAnText(epAnTag(b, ["title"])), 200);
		let link = epAnDecode(epAnTag(b, ["link"])).trim();
		if (!link || link.startsWith("<")) {
			const ls = [...b.matchAll(/<link\b([^>]*)\/?>/gi)].map((m) => m[1]);
			const pick = ls.find((a) => /rel=["']alternate["']/i.test(a)) || ls.find((a) => !/rel=/i.test(a)) || ls[0] || "";
			link = epAnDecode((pick.match(/href=["']([^"']+)["']/i) || [])[1] || "");
		}
		if (!link) {
			const g = epAnDecode(epAnTag(b, ["guid", "id"])).trim();
			if (/^https?:\/\//.test(g)) link = g;
		}
		const url = epAnCanon(link, feedUrl);
		const when = Date.parse(epAnText(epAnTag(b, ["pubDate", "published", "updated", "date", "issued"])));
		const intro = epAnClip(epAnText(epAnTag(b, ["description", "summary", "content", "encoded"])), 200);
		if (title && url) out.push({
			title,
			url,
			when: Number.isFinite(when) ? when : 0,
			intro
		});
	}
	return out;
}
async function epAnGet(url) {
	const r = await fetch(url, {
		headers: {
			"user-agent": EP_AN_UA,
			accept: "application/rss+xml, application/atom+xml, application/xml, text/xml, text/html;q=0.8, */*;q=0.5"
		},
		redirect: "follow",
		signal: AbortSignal.timeout(1e4)
	});
	if (!r.ok) throw new Error("HTTP " + r.status);
	return {
		url: r.url || url,
		type: r.headers.get("content-type") || "",
		text: (await r.text()).slice(0, 3e6)
	};
}
function epAnIsFeed(text) {
	return /<(rss|feed|rdf:RDF)\b/i.test(text.slice(0, 2e3));
}
// Find a feed: the org's saved feed, else a <link rel="alternate"> on its website, else a few common paths.
async function epAnFindFeed(org) {
	if (org.feed) return {
		feed: org.feed,
		doc: await epAnGet(org.feed)
	};
	const site = epAnCanon(org.website);
	if (!site) throw new Error("No website or feed set");
	const home = await epAnGet(site);
	if (epAnIsFeed(home.text)) return {
		feed: home.url,
		doc: home
	};
	const tags = [...home.text.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]).filter((t) => /rel=["']?alternate/i.test(t) && /application\/(rss|atom)\+xml/i.test(t) && !/comments/i.test(t));
	const cands = tags.map((t) => epAnCanon(epAnDecode((t.match(/href=["']([^"']+)["']/i) || [])[1] || ""), home.url)).filter(Boolean);
	const origin = new URL(home.url).origin;
	for (const g of EP_AN_GUESSES) cands.push(origin + g);
	for (const u of [...new Set(cands)].slice(0, 4)) try {
		const d = await epAnGet(u);
		if (epAnIsFeed(d.text)) return {
			feed: d.url,
			doc: d
		};
	} catch {}
	throw new Error("No news feed found on " + new URL(home.url).hostname);
}
async function epAutoNewsOrg(env, org, now = Date.now()) {
	const db = env.DB;
	let feed = org.feed || "";
	let added = 0;
	let note = "";
	let seen = [];
	try {
		seen = JSON.parse(org.seen || "[]");
	} catch {}
	try {
		const found = await epAnFindFeed(org);
		feed = found.feed;
		const items = epAnItems(found.doc.text, found.feed).filter((x) => x.when && x.when <= now + 36e5 && now - x.when <= EP_AN_WINDOW_H * 36e5).sort((a, b) => b.when - a.when);
		for (const it of items) {
			if (added >= EP_AN_MAX_NEW) break;
			if (seen.includes(it.url)) continue;
			seen.push(it.url);
			if ((await db.prepare("SELECT 1 AS n FROM records WHERE type IN ('post','paper') AND (json_extract(data,'$.link.v')=? OR json_extract(data,'$.url.v')=?) LIMIT 1").bind(it.url, it.url).first())?.n) continue;
			let site = "";
			try {
				site = new URL(it.url).hostname.replace(/^www\./, "");
			} catch {}
			const rid = await applyCompose(db, {
				kind: "news",
				kind_label: "News",
				title: epMeow(it.title),
				intro: epMeow(it.intro),
				body: "",
				url: it.url,
				origin: "Repost",
				source_site: site,
				as: org.id
			}, null);
			if (rid) {
				await db.prepare("UPDATE records SET data=json_set(data,'$.auto_news',json('{\"v\":\"Yes\"}'),'$.date',json_object('v',?)), feed_at=? WHERE id=?").bind(new Date(it.when).toISOString().slice(0, 10), new Date(it.when).toISOString().slice(0, 10), rid).run();
				added++;
			}
		}
		note = added ? `Added ${added} new ${added === 1 ? "item" : "items"}` : items.length ? "Nothing new" : "No items from the last 36 hours";
	} catch (ex) {
		note = ex instanceof Error ? ex.message : String(ex);
	}
	await db.prepare("UPDATE auto_news SET feed=?, last_run=?, last_note=?, seen=? WHERE record_id=?").bind(feed, nowStamp(), note.slice(0, 200), JSON.stringify(seen.slice(-300)), org.id).run();
	console.log(`[autonews] ${org.slug}: ${note}`);
	return {
		slug: org.slug,
		feed,
		added,
		note
	};
}
async function epAnOrgs(db, where, ...args) {
	const { results } = await db.prepare(`SELECT r.id, r.slug, r.name, r.data, a.feed, a.seen, a.last_run FROM auto_news a JOIN records r ON r.id=a.record_id WHERE ${where}`).bind(...args).all();
	return (results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		website: fieldV(parseData(r.data), "website"),
		feed: String(r.feed || ""),
		seen: String(r.seen || "[]")
	}));
}
async function epAutoNewsCron(env) {
	try {
		await ensureExtraSchema(env.DB);
		const cutoff = new Date(Date.now() - 20 * 36e5).toISOString().slice(0, 19).replace("T", " ");
		const orgs = await epAnOrgs(env.DB, "a.enabled=1 AND (a.last_run IS NULL OR a.last_run < ?) ORDER BY a.last_run IS NOT NULL, a.last_run LIMIT " + EP_AN_PER_TICK, cutoff);
		for (const org of orgs) await epAutoNewsOrg(env, org);
	} catch (ex) {
		console.log("[autonews] " + (ex instanceof Error ? ex.message : String(ex)));
	}
}
api.post("/admin/autonews/:slug/run", async (c) => {
	if (!c.get("auth").is_admin) return c.json({ error: "Not found" }, 404);
	const [org] = await epAnOrgs(c.env.DB, "r.slug=?", c.req.param("slug"));
	if (!org) return c.json({ error: "Turn on automatic updates first." }, 400);
	return c.json({
		ok: true,
		...await epAutoNewsOrg(c.env, org)
	});
});
api.post("/admin/autonews/:slug/feed", async (c) => {
	if (!c.get("auth").is_admin) return c.json({ error: "Not found" }, 404);
	const all = await formAll(c);
	const raw = ((all.feed || [""]).slice(-1)[0] || "").trim();
	const feed = raw ? epAnCanon(raw) : "";
	if (raw && !feed) return c.json({ error: "That isn't a web address." }, 400);
	const [org] = await epAnOrgs(c.env.DB, "r.slug=?", c.req.param("slug"));
	if (!org) return c.json({ error: "Turn on automatic updates first." }, 400);
	await c.env.DB.prepare("UPDATE auto_news SET feed=? WHERE record_id=?").bind(feed, org.id).run();
	return c.json({
		ok: true,
		feed
	});
});
api.get("/admin/autonews", async (c) => {
	if (!c.get("auth").is_admin) return c.json({ error: "Not found" }, 404);
	const { results } = await c.env.DB.prepare("SELECT r.id, r.slug, r.name, r.type, r.data, a.feed, a.updated, a.last_run, a.last_note FROM auto_news a JOIN records r ON r.id=a.record_id WHERE a.enabled=1 ORDER BY r.name COLLATE NOCASE").all();
	return c.json({ orgs: (results || []).map((r) => ({
		id: Number(r.id),
		slug: String(r.slug),
		name: String(r.name),
		type: String(r.type),
		website: fieldV(parseData(r.data), "website"),
		feed: String(r.feed || ""),
		updated: r.updated ?? null,
		last_run: r.last_run ?? null,
		last_note: String(r.last_note || "")
	})) });
});
api.get("/r/:slug", async (c) => {
	const rec = await onePublic(c.env.DB, c.req.param("slug"));
	if (!rec) return c.json({ error: "Not found" }, 404);
	if (rec.type === "post" && fieldStr(rec.data, "origin") === "Repost" && fieldStr(rec.data, "link")) return c.json({ redirect: fieldStr(rec.data, "link") });
	const { outgoing, incoming } = await linksFor(c.env.DB, [rec.id]);
	const out = outgoing.get(rec.id) || {};
	const inc = incoming.get(rec.id) || {};
	const actorId = (out[rec.type === "paper" ? "orgs" : rec.type === "product" ? "maker" : rec.type === "model" ? "developer" : "about"] || [])[0]?.id;
	const extras = actorId ? await allByIds(c.env.DB, [actorId]) : /* @__PURE__ */ new Map();
	const actor = actorId ? extras.get(actorId) : void 0;
	const relatedIds = Object.values(out).flat().map((x) => x.id).concat(Object.values(inc).flat().map((x) => x.id));
	const related = await allByIds(c.env.DB, relatedIds);
	const auth = c.get("auth");
	const comments = {
		count: 0,
		items: await commentsFor(c.env.DB, rec.id, auth)
	};
	comments.count = comments.items.filter((x) => x.status === "approved").length;
	const soc = await socialState(c.env.DB, auth, [rec.id]);
	const pins = auth.logged ? await pinIds(c.env.DB) : [];
	const quote_on = rec.type === "product" && orderMode(rec) === "quote";
	const gallery = galleryFor(rec, rec.type === "post" ? fieldStr(rec.data, "video") : fieldStr(rec.data, "official_video") || fieldStr(rec.data, "video"), fieldStr(rec.data, "video_credit"));
	const bodyHtml = rec.body ? md(rec.body) : "";
	return c.json({
		...rec,
		outgoing: out,
		incoming: inc,
		category: categoryKey(rec),
		type_label: typeLabel(rec),
		href: `/r/${rec.slug}`,
		image: phModel(rec, "hero", rec.type === "model" ? actor : void 0).src,
		ph: phModel(rec, rec.type === "company" ? "big" : "hero", rec.type === "model" ? actor : void 0),
		actor: actor ? {
			slug: actor.slug,
			name: actor.name,
			ph: phModel(actor, "av")
		} : null,
		gallery,
		body_html: bodyHtml,
		comments,
		commentable: COMMENTABLE.includes(rec.type),
		likes: soc.likes.get(rec.id) || 0,
		liked: soc.liked.has(rec.id),
		saved: soc.saved.has(rec.id),
		following: soc.following.has(rec.id),
		watching: soc.watching.has(rec.id),
		pinned: pins.includes(rec.id),
		can_pin: can(auth, "home"),
		can_autonews: auth.is_admin && EP_AUTONEWS_TYPES.includes(rec.type),
		autonews: auth.is_admin && EP_AUTONEWS_TYPES.includes(rec.type) ? await epAutoNewsOn(c.env.DB, rec.id) : false,
		...auth.is_admin && EP_AUTONEWS_TYPES.includes(rec.type) ? await epAutoNewsInfo(c.env.DB, rec.id) : {},
		can_edit: auth.logged,
		can_manage: [
			"company",
			"university",
			"lab"
		].includes(rec.type) && auth.user ? await canManage(c, rec.id) : false,
		claim_pending: auth.user ? Boolean((await c.env.DB.prepare("SELECT 1 AS n FROM submissions WHERE user_id=? AND kind='claim' AND target_id=? AND status='pending'").bind(auth.user.id, rec.id).first())?.n) : false,
		claimed: Boolean((await c.env.DB.prepare("SELECT 1 AS n FROM owners WHERE company_id=?").bind(rec.id).first())?.n),
		site_org: rec.slug === SITE_ORG_SLUG,
		quote_on,
		related: [...related.values()].map((r) => ({
			id: r.id,
			slug: r.slug,
			name: r.name,
			type: r.type,
			type_label: typeLabel(r),
			summary: r.summary,
			href: `/r/${r.slug}`,
			ph: phModel(r, "md"),
			category: categoryKey(r),
			status: fieldStr(r.data, "status"),
			date: feedDate(r)
		})),
		facts: [rec.type === "event" && whenText(rec, true) ? {
			k: "When",
			v: whenText(rec, true),
			extra: countdown(rec)
		} : null, rec.type === "event" && placeText(rec) ? {
			k: "Where",
			v: placeText(rec),
			map: `https://www.openstreetmap.org/search?query=${encodeURIComponent(placeText(rec))}`
		} : null].filter(Boolean),
		ev: rec.type === "event" ? {
			date: evDayPart(rec),
			state: evState(rec),
			place: placeText(rec),
			when: whenText(rec, true),
			countdown: countdown(rec),
			url: fieldStr(rec.data, "url")
		} : null,
		category_kind: rec.type === "post" || rec.type === "paper" ? categoryOf(rec, CAT_ALIAS, POST_CATEGORIES) : null,
		site_name: SITE_NAME,
		credits: fieldStr(rec.data, "credits"),
		excerpt: rec.summary || stripMd(rec.body || "").slice(0, 200),
		spec_ranks: await computeSpecRanks(c.env.DB, rec),
		options: (() => {
			const raw = fieldVal(rec.data, "options");
			return Array.isArray(raw) ? raw : [];
		})()
	});
});
api.get("/search", async (c) => {
	const q = (c.req.query("q") || "").trim();
	const limit = Math.min(Number(c.req.query("limit") || 0) || (c.req.query("grouped") ? 200 : 24), 200);
	const types = (c.req.query("types") || "").split(",").filter(Boolean);
	const hits = await searchHits(c.env.DB, q, limit || 24, types.length ? types : void 0);
	if (c.req.query("grouped") === "1") return c.json(groupSearch(q, hits));
	return c.json(hits.map(({ id, name, slug, type, type_label, plural, summary }) => ({
		id,
		name,
		slug,
		type,
		type_label,
		plural,
		summary
	})));
});
api.get("/page/:key", async (c) => {
	const doc = await pageDoc(c.env.DB, c.req.param("key"));
	if (!doc) return c.json({ error: "Not found" }, 404);
	return c.json(doc);
});
api.get("/compare", async (c) => {
	const payload = await comparePayload(c.env.DB, c.req.query("ids") || "");
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.post("/like/:id", (c) => apiToggle(c, "like", c.req.param("id")));
api.post("/save/:id", (c) => apiToggle(c, "save", c.req.param("id")));
api.post("/follow/:id", (c) => apiToggle(c, "follow", c.req.param("id")));
api.post("/ufollow/:id", (c) => apiUfollow(c, c.req.param("id")));
api.get("/compose", async (c) => c.json(await composePayload(c, c.req.query("company") || "")));
api.get("/watchlist", async (c) => {
	const d = await watchlistPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/watchlist/sources", async (c) => {
	const d = await sourcesPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/watchlist/ids", epWatchIds);
api.get("/watchlist/find", epWatchFind);
api.post("/watchlist/toggle", epWatchToggle);
api.get("/watchlist/newsletter", async (c) => {
	const d = await newsletterPayload(c);
	return d instanceof Response ? d : c.json(d);
});
api.get("/create", async (c) => {
	const d = await createPayload(c, "menu");
	return c.json(d);
});
api.get("/create/:kind", async (c) => {
	const d = await createPayload(c, c.req.param("kind"));
	return c.json(d);
});
api.get("/admin/home", async (c) => {
	const g = gateStatus("/admin/home", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await homeAdminPayload(c));
});
api.get("/admin/reports", async (c) => {
	const g = gateStatus("/admin/reports", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await reportsPayload(c));
});
api.get("/admin/requests", async (c) => {
	const g = gateStatus("/admin/requests", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await requestsAdminPayload(c));
});
// epPlace: characters for the Community "Place" hub. Public fields only: username, character look,
// public post count and latest post, and the byline (title, organisation, bio) when the member's
// profile visibility allows the viewer to see it, with their social links. Everyone's character is shown
// unless they turned it off under Account, Settings (prefs.place_hide).
// epSocial: links a member adds for their Place card (Account, Settings). Returns a clean value or null if invalid.
function epSocial(kind, raw) {
	let s = String(raw || "").trim().slice(0, 200);
	if (!s) return "";
	const hosts = {
		x: ["x.com", "twitter.com"],
		instagram: ["instagram.com"],
		linkedin: ["linkedin.com"],
		discord: ["discord.com", "discord.gg"]
	}[kind];
	if (!hosts) return null;
	if (/^https?:\/\//i.test(s) || /^(www\.)?[a-z0-9.-]+\.[a-z]{2,}\//i.test(s)) {
		let u;
		try {
			u = new URL(/^https?:\/\//i.test(s) ? s : "https://" + s);
		} catch {
			return null;
		}
		const h = u.hostname.toLowerCase().replace(/^(www|m|[a-z]{2})\./, "");
		if (!hosts.includes(h) || u.username || u.password) return null;
		return "https://" + u.hostname.toLowerCase() + u.pathname.replace(/\/+$/, "") + (kind === "discord" ? u.search : "");
	}
	s = s.replace(/^@/, "");
	if (kind === "discord") return /^[a-z0-9_.]{2,32}$/i.test(s) ? s : null;
	if (kind === "linkedin") return /^[a-z0-9_-]{3,100}$/i.test(s) ? "https://www.linkedin.com/in/" + s : null;
	if (kind === "x") return /^[a-z0-9_]{1,15}$/i.test(s) ? "https://x.com/" + s : null;
	return /^[a-z0-9_.]{1,30}$/i.test(s) ? "https://www.instagram.com/" + s : null;
}
var EP_SOCIALS = ["x", "linkedin", "discord", "instagram"];
// epCardItem: one member's public card (Community Place and the card you get by tapping any walking character).
function epCardItem(u, me, logged, p) {
	const uid = Number(u.id);
	const mine = uid === me;
	const pr = prefsOf(u);
	const vis = String(pr.profile_vis || "members");
	const showByline = mine || vis === "everyone" || (vis === "members" && logged);
	let prof = {};
	try {
		prof = JSON.parse(String(u.profile || "{}"));
	} catch {}
	const pv = (k) => {
		const x = prof[k];
		const v = x && typeof x === "object" && "v" in x ? x.v : x;
		return typeof v === "string" ? v.slice(0, k === "bio" ? 400 : 120) : "";
	};
	return {
		username: String(u.username),
		look: walkerLook(u),
		mine,
		byline: showByline ? {
			name: pv("name").slice(0, 80),
			title: pv("title"),
			organisation: pv("organisation"),
			bio: pv("bio")
		} : null,
		socials: showByline && pr.socials && typeof pr.socials === "object" ? Object.fromEntries(EP_SOCIALS.filter((k) => typeof pr.socials[k] === "string" && pr.socials[k]).map((k) => [k, String(pr.socials[k]).slice(0, 200)])) : {},
		hiddenSelf: Boolean(mine && pr.place_hide),
		posts: p ? p.n : 0,
		latest: p && p.latest ? p.latest : null
	};
}
async function epCardPayload(c) {
	const auth = c.get("auth");
	const me = auth.user ? Number(auth.user.id) : 0;
	const want = String(c.req.query("u") || "").trim().slice(0, 80);
	let u = null;
	if (c.req.query("me") === "1" && me) u = await c.env.DB.prepare("SELECT id, username, prefs, profile, suspended_until FROM users WHERE id=? AND disabled=0").bind(me).first();
	else if (want) u = await c.env.DB.prepare("SELECT id, username, prefs, profile, suspended_until FROM users WHERE disabled=0 AND (username=? COLLATE NOCASE OR name=?) ORDER BY (username=? COLLATE NOCASE) DESC, id LIMIT 1").bind(want, want, want).first();
	if (!u || (Number(u.id) !== me && isSuspended(u))) return null;
	let p = null;
	try {
		const row = await c.env.DB.prepare("SELECT COUNT(*) AS n, MAX(id) AS last FROM records WHERE author_id=? AND type IN ('post','paper') AND private=0 AND COALESCE(demo,0)=0").bind(u.id).first();
		if (row && row.n) {
			const lr = await c.env.DB.prepare("SELECT slug, name FROM records WHERE id=?").bind(row.last).first();
			p = { n: Number(row.n), latest: lr ? { slug: String(lr.slug), name: String(lr.name) } : null };
		}
	} catch {}
	return epCardItem(u, me, Boolean(auth.user), p);
}
api.get("/community/card", async (c) => {
	const it = await epCardPayload(c);
	return it ? c.json({ item: it }) : c.json({ error: "Not a member" }, 404);
});
async function epPlacePayload(c) {
	const auth = c.get("auth");
	const me = auth.user ? Number(auth.user.id) : 0;
	const logged = Boolean(auth.user);
	const { results } = await c.env.DB.prepare("SELECT id, username, prefs, profile, suspended_until FROM users WHERE disabled=0 ORDER BY id LIMIT 400").all();
	const posts = new Map();
	try {
		const { results: pr } = await c.env.DB.prepare("SELECT r.author_id AS a, COUNT(*) AS n, MAX(r.id) AS last FROM records r WHERE r.type IN ('post','paper') AND r.private=0 AND COALESCE(r.demo,0)=0 AND r.author_id IS NOT NULL GROUP BY r.author_id").all();
		const lastIds = [];
		for (const x of pr || []) {
			posts.set(Number(x.a), { n: Number(x.n || 0), last: Number(x.last || 0) });
			if (x.last) lastIds.push(Number(x.last));
		}
		const lastRec = new Map();
		for (let i = 0; i < lastIds.length; i += 90) {
			const ids = lastIds.slice(i, i + 90);
			const { results: lr } = await c.env.DB.prepare("SELECT id, slug, name FROM records WHERE id IN (" + ids.map(() => "?").join(",") + ")").bind(...ids).all();
			for (const r of lr || []) lastRec.set(Number(r.id), { slug: String(r.slug), name: String(r.name) });
		}
		for (const v of posts.values()) v.latest = lastRec.get(v.last) || null;
	} catch {}
	const items = [];
	let hidden = 0;
	for (const raw of results || []) {
		const u = raw;
		const uid = Number(u.id);
		const mine = uid === me;
		if (!mine && isSuspended(u)) continue;
		if (prefsOf(u).place_hide && !mine) {
			hidden++;
			continue;
		}
		items.push(epCardItem(u, me, logged, posts.get(uid)));
	}
	return {
		items,
		hidden,
		logged
	};
}
api.get("/community/place", async (c) => c.json(await epPlacePayload(c)));
api.get("/community", async (c) => c.json(await communityPayload(c)));
api.get("/community/orgs", async (c) => {
	const g = gateStatus("/community/orgs", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await communityOrgsPayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/community/people", async (c) => {
	const g = gateStatus("/community/people", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await communityPeoplePayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/admin/meet", async (c) => {
	const g = gateStatus("/admin/meet", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const d = await meetAdminPayload(c);
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/admin/email", async (c) => {
	const g = gateStatus("/admin/email", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await emailAdminPayload(c));
});
api.get("/admin/stickers", async (c) => {
	const g = gateStatus("/admin/stickers", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await stickersPayload(c));
});
api.get("/admin/focus", async (c) => {
	const g = gateStatus("/admin/focus", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await focusPayload(c));
});
api.get("/claim/:slug", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/claim/" + c.req.param("slug")
	}, 401);
	const d = await claimPayload(c, c.req.param("slug"));
	return "status" in d && d.status === 404 ? c.json(d, 404) : c.json(d);
});
api.get("/manage/:slug", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/manage/" + c.req.param("slug")
	}, 401);
	const d = await managePayload(c, c.req.param("slug"), c.req.query("tab") || "info");
	return "status" in d && typeof d.status === "number" && d.status >= 400 ? c.json(d, d.status) : c.json(d);
});
api.get("/manage/:slug/:section", async (c) => {
	if (!c.get("auth").user) return c.json({
		error: "Log in first.",
		next: "/login?next=/manage/" + c.req.param("slug")
	}, 401);
	const d = await managePayload(c, c.req.param("slug"), c.req.param("section") || "info");
	return "status" in d && typeof d.status === "number" && d.status >= 400 ? c.json(d, d.status) : c.json(d);
});
var app = new Hono();
function isOauthCallback(path) {
	return /^\/api\/auth\/oauth\/[a-z]+\/callback$/.test(path);
}
app.use("*", async (c, next) => {
	const auth = await loadAuth(c.req.raw, c.env);
	c.set("auth", auth);
	const path = new URL(c.req.url).pathname;
	if (isMutating(c.req.method) && path !== "/unsubscribe" && !isOauthCallback(path) && !sameOrigin(c.req.raw)) return c.text("Cross-origin request refused", 403);
	await next();
	if (auth.setCookies) for (const ck of auth.setCookies) c.header("Set-Cookie", ck, { append: true });
});
app.get("/healthz", (c) => c.json({ ok: true }));
app.get("/media/*", async (c) => {
	const name = new URL(c.req.url).pathname.replace(/^\/media\//, "");
	if (!name || name.includes("..") || name.startsWith("/")) return c.text("Not found", 404);
	try {
		const obj = await c.env.MEDIA.get(name);
		if (!obj) return c.text("Not found", 404);
		const headers = new Headers();
		obj.writeHttpMetadata(headers);
		headers.set("etag", obj.httpEtag);
		headers.set("cache-control", "public, max-age=86400");
		return new Response(obj.body, { headers });
	} catch {
		return c.text("Not found", 404);
	}
});
async function mePayload(c) {
	const auth = c.get("auth");
	const bar = adminBarLinks(auth, auth.logged ? await barCounts(c.env.DB, auth) : {});
	const { jsonUser } = await Promise.resolve().then(() => session_exports);
	const payload = jsonUser(auth, c.env);
	payload.signup_mode = await signupMode(c.env.DB);
	return {
		...payload,
		bar,
		bar_label: auth.needs_2fa ? "setup" : auth.logged ? auth.is_admin ? "admin" : "contributor" : "",
		look: auth.user ? walkerLook(auth.user) : null,
		stickers: await stickerPack(c.env.DB)
	};
}
async function stickerPack(db) {
	const out = {};
	try {
		const pack = JSON.parse(await setting(db, "stickers") || "[]");
		for (const x of pack) if (x && x.id && x.url) out[x.id] = {
			n: x.name,
			u: x.url
		};
	} catch {}
	return out;
}
api.get("/me", async (c) => c.json(await mePayload(c)));
api.get("/auth/config", authConfig);
api.post("/auth/login", postLogin);
api.post("/auth/login/code", postLoginCode);
api.post("/auth/join", postJoin);
api.get("/auth/oauth/:provider", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return startOAuth(c, p);
});
api.get("/auth/oauth/:provider/callback", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return oauthCallback(c, p);
});
api.post("/auth/oauth/:provider/callback", (c) => {
	const p = c.req.param("provider");
	if (p !== "google" && p !== "apple" && p !== "x") return c.json({ error: "Unknown sign-in method." }, 404);
	return oauthCallback(c, p);
});
api.post("/auth/logout", postLogout);
api.get("/account/:tab?", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	const tab = c.req.param("tab") || "overview";
	return c.json(await accountPayload(c, tab));
});
api.post("/account", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postAccount(c);
});
api.post("/account/character", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postCharacter(c);
});
api.post("/account/walked", async (c) => {
	const auth = c.get("auth");
	if (!auth.user) return c.json({ error: "Log in first." }, 401);
	const g = await readBody(c);
	let page = String(g.page || "").split(/[?#]/)[0].slice(0, 200);
	if (!/^\/[\w\-./%]*$/.test(page)) return c.json({ error: "Bad page." }, 400);
	page = page.replace(/\/+$/, "") || "/";
	const pr = prefsOf(auth.user);
	const list = Array.isArray(pr.walked) ? pr.walked.filter((x) => typeof x === "string") : [];
	if (list.length < 10 && !list.includes(page)) {
		list.push(page);
		pr.walked = list;
		await savePrefs(c.env.DB, auth.user.id, pr);
	}
	return c.json({ ok: true, walked: list.length });
});
api.post("/account/security", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postSecurity(c);
});
api.get("/account/export.json", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return exportMine(c);
});
api.get("/users", async (c) => {
	if (!c.get("auth").is_admin) return c.json({ error: "Not found" }, 404);
	return c.json(await usersPayload(c));
});
api.post("/users", postUsers);
api.get("/review", async (c) => {
	const g = gateStatus("/review", "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return c.json(await reviewPayload(c));
});
api.post("/review/:id", async (c) => {
	const g = gateStatus("/review", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postReview(c, c.req.param("id"));
});
api.post("/review/comment/:id", async (c) => {
	const g = gateStatus("/review", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postReviewComment(c, c.req.param("id"));
});
api.get("/new", async (c) => {
	if (!can(c.get("auth"), "create")) return c.json({ error: "Not found" }, 404);
	return c.json(await newChooser());
});
api.get("/edit/:slug", async (c) => {
	const g = gateStatus("/edit/" + c.req.param("slug"), "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const payload = await editPayload(c, c.req.param("slug"));
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.get("/new/:type", async (c) => {
	if (!can(c.get("auth"), "create")) return c.json({ error: "Not found" }, 404);
	const payload = await editPayload(c, void 0, c.req.param("type"));
	if ("error" in payload) return c.json({ error: payload.error }, payload.status);
	return c.json(payload);
});
api.post("/save", async (c) => {
	const g = gateStatus("/save", "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postSave(c);
});
api.post("/compose", async (c) => {
	if (!c.get("auth").user) return c.json({ error: "Log in first." }, 401);
	return postCompose(c);
});
api.post("/delete/:slug", async (c) => {
	const g = gateStatus("/delete/" + c.req.param("slug"), "POST", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	return postDelete(c, c.req.param("slug"));
});
var ADMIN_STUBS = {
	"/admin/email": {
		title: "Email",
		note: "SMTP settings. Mail sending still uses the operator's server; this page stores the same settings keys as the Python site."
	},
	"/admin/stickers": {
		title: "Stickers",
		note: "Sticker packs for the Lounge land with Stage 6."
	},
	"/admin/focus": {
		title: "Focus areas",
		note: "Focus areas for organisation tags."
	},
	"/admin/requests": {
		title: "Quote requests",
		note: "Buyer quote requests. Admin only."
	},
	"/admin/meet": {
		title: "Community requests",
		note: "Introductions queue. Needs the Meet privilege."
	},
	"/admin/home": {
		title: "Home highlights",
		note: "Welcome message and pinned items. Needs the Home privilege."
	},
	"/admin/reports": {
		title: "Reports",
		note: "Member reports. Needs the Review privilege."
	},
	"/community/people": {
		title: "People",
		note: "The Community People list is admin-only, as in the Python site."
	},
	"/community/orgs": {
		title: "Community organisations",
		note: "Needs the Meet privilege."
	}
};
api.get("/admin/page", async (c) => {
	const path = c.req.query("path") || "";
	const g = gateStatus(path, "GET", c.get("auth"));
	if (g) return c.json({ error: g.body || "Not found" }, g.status);
	const stub = ADMIN_STUBS[path];
	if (!stub) return c.json({ error: "Not found" }, 404);
	return c.json(stub);
});
app.post("/login", postLogin);
app.post("/login/code", postLoginCode);
app.post("/join", postJoin);
app.post("/logout", postLogout);
app.post("/account", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account");
	return postAccount(c);
});
app.post("/account/character", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account/character");
	return postCharacter(c);
});
app.post("/account/security", async (c) => {
	if (!c.get("auth").user) return c.redirect("/login?next=/account/security");
	return postSecurity(c);
});
app.post("/users", postUsers);
app.post("/review/:id", async (c) => postReview(c, c.req.param("id")));
app.post("/save", postSave);
app.post("/compose", postCompose);
app.post("/delete/:slug", async (c) => postDelete(c, c.req.param("slug")));
app.post("/api/like/:id", (c) => apiToggle(c, "like", c.req.param("id")));
app.post("/api/save/:id", (c) => apiToggle(c, "save", c.req.param("id")));
app.post("/api/follow/:id", (c) => apiToggle(c, "follow", c.req.param("id")));
app.post("/api/ufollow/:id", (c) => apiUfollow(c, c.req.param("id")));
app.post("/comment/:id", (c) => postComment(c, c.req.param("id")));
app.post("/api/comment/:id", (c) => postComment(c, c.req.param("id")));
app.post("/comment/:id/delete", (c) => postCommentDelete(c, c.req.param("id")));
app.post("/watch/:slug", (c) => postWatch(c, c.req.param("slug")));
app.post("/api/watch/:slug", (c) => postWatch(c, c.req.param("slug")));
app.post("/quote/:slug", (c) => postQuote(c, c.req.param("slug")));
app.post("/api/quote/:slug", (c) => postQuote(c, c.req.param("slug")));
app.post("/report", postReport);
app.post("/api/report", postReport);
app.post("/home/pin/:slug", (c) => postPin(c, c.req.param("slug")));
app.post("/admin/home", postHomeAdmin);
app.post("/admin/reports", postReports);
app.post("/admin/requests", postRequestsAdmin);
app.post("/watchlist/sections", postWlSections);
app.post("/watchlist/add", postWlAdd);
app.post("/watchlist/remove", postWlRemove);
app.post("/watchlist/schedule", postWlSchedule);
app.post("/watchlist/send", postWlSend);
app.post("/create/org", postCreateOrg);
app.post("/create/product", (c) => postCreateItem(c, "product"));
app.post("/create/job", (c) => postCreateItem(c, "job"));
app.post("/community/meet", postMeet);
app.post("/community/meet/withdraw", postWithdraw);
app.post("/admin/meet", postMeetAdmin);
app.post("/admin/email", postEmailAdmin);
app.post("/admin/email/test", postEmailTest);
app.post("/admin/stickers", postStickers);
app.post("/admin/focus", postFocus);
app.post("/claim/:slug/code", (c) => postClaimCode(c, c.req.param("slug")));
app.post("/claim/:slug/verify", (c) => postClaimVerify(c, c.req.param("slug")));
app.post("/manage/job/:id/toggle", (c) => postJobToggle(c, c.req.param("id")));
app.post("/manage/:slug", (c) => postManage(c, c.req.param("slug"), "info"));
app.post("/manage/:slug/:section", (c) => postManage(c, c.req.param("slug"), c.req.param("section")));
app.get("/unsubscribe", unsubscribe);
app.post("/unsubscribe", unsubscribe);
app.get("/export.json", async (c) => {
	const g = gateStatus("/export.json", "GET", c.get("auth"));
	if (g) return deny(c, g);
	const recs = await c.env.DB.prepare("SELECT * FROM records ORDER BY id").all();
	const links = await c.env.DB.prepare("SELECT src, rel, dst, note, pos FROM links ORDER BY id").all();
	const body = JSON.stringify({
		exported: (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " "),
		records: (recs.results || []).map((r) => loadRow(r)),
		links: links.results || []
	}, null, 2);
	return new Response(body, { headers: {
		"content-type": "application/json",
		"content-disposition": "attachment; filename=embodiment-place-export.json"
	} });
});
function deny(c, g) {
	if (g.status === 302 && g.location) return c.redirect(g.location);
	if (g.status === 403) return c.html("<!doctype html><html><body><div class=empty><h1>Admins only</h1><p>Your account can read and chat, not edit.</p></div></body></html>", 403);
	return c.html("<!doctype html><html><body><div class=empty><h1>Not found</h1></div></body></html>", 404);
}
function shellPage(c, me) {
	const path = new URL(c.req.url).pathname;
	const auth = c.get("auth");
	let bar = "";
	if (auth.needs_2fa) bar = `<div class="adminbar adminbar-setup"><span>Set up two-step login to use admin and contributor tools.</span><a href="/account/security">Open Security</a></div>`;
	else if (auth.logged) bar = `<div class=adminbar><span>${`Editing on${auth.is_admin ? "" : " · contributor"}`}</span>${me.bar.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}</div>`;
	const account = auth.user ? `<a href="/watchlist">Watchlist</a><a href="/create" class="navcreate">+ Create</a><a href="/account" class="navme" aria-label="Account, ${auth.user.username}">Account</a><form method=post action=/logout class=inline onsubmit="if(window.epLogoutAsk){epLogoutAsk(this);return false}return confirm('Log out of embodiment.place?')"><button class=linkbtn>Log out</button></form>` : `<a href="/login">Log in</a><a href="/join">Sign up</a>`;
	let main = `<h1>${path}</h1>`;
	if (path === "/login" || path.startsWith("/login/")) main = `<div class=loginbox><h1>Log in</h1><form method=post action=/login><input name=username><input type=password name=password><button class=btn>Log in</button></form></div>`;
	if (path === "/join") main = `<div class=loginbox><h1>Create an account</h1></div>`;
	if (path.startsWith("/account")) main = `<div class=acct><h1>Account</h1><nav class=tabs>${me.user ? "" : ""}</nav></div>`;
	if (path === "/users") main = `<div class=listhead><h1>Users</h1></div><table class=data></table>`;
	if (path === "/review") main = `<div class=listhead><h1>Review</h1></div>`;
	if (path === "/new") main = `<div class=listhead><h1>New record</h1></div>`;
	return `<!doctype html><html><body>${bar}<header class=top><div class=bar><a class=brand href=/>*embodiment.place</a><nav class=right>${account}</nav></div></header><main class=wrap>${main}</main></body></html>`;
}
api.get("/forgot", async (c) => c.json(await forgotPayload(c)));
api.post("/forgot", postForgot);
api.get("/reset", async (c) => c.json(await resetPayload(c)));
api.post("/reset", postReset);
api.post("/walk", postWalk);
api.get("/walk/peek", getWalkPeek);
api.get("/live/ws", getLiveWs);
api.get("/room/poll", getRoomPoll);
api.post("/room/post", postRoom);
api.post("/room/msg/:id", postRoomMsg);
api.get("/event/:eid/poll", getEvPoll);
api.post("/event/:eid/post", postEv);
app.route("/api", api);
app.all("/login/debug", (c) => c.text("Not available", 404));
app.all("*", async (c) => {
	const path = new URL(c.req.url).pathname;
	if (isGatedPath(path) && ![
		"/login",
		"/login/code",
		"/join",
		"/logout",
		"/forgot"
	].includes(path) && !path.startsWith("/reset") && !path.startsWith("/verify") && !path.startsWith("/login/")) {
		const g = gateStatus(path, c.req.method, c.get("auth"));
		if (g) return deny(c, g);
	}
	if (c.req.method !== "GET" && c.req.method !== "HEAD") return c.text("Not found", 404);
	if (c.env.ASSETS) return c.env.ASSETS.fetch(c.req.raw);
	const me = await mePayload(c);
	return c.html(shellPage(c, me), 200);
});
// \0virtual:cloudflare/worker-entry
var worker_entry_default = {
	async fetch(request, env, ctx) {
		return app.fetch(request, env, ctx);
	},
	async scheduled(event, env, ctx) {
		ctx.waitUntil(epDigestCron(env));
		ctx.waitUntil(epAutoNewsCron(env));
	}
};
export { LiveHub, app, worker_entry_default as default };

//# sourceMappingURL=index.js.map
