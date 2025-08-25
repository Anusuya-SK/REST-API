// | Feature           | Fetch               | Axios                |
// | ----------------- | ------------------- | -------------------- |
// | Built-in          | ✅ Yes               | ❌ No (needs install) |
// | Error handling    | Manual (`res.ok`)   | Auto rejects         |
// | JSON handling     | `res.json()` needed | Auto in `res.data`   |
// | Timeout           | Manual (AbortCtrl)  | Built-in             |
// | Interceptors      | ❌ No                | ✅ Yes                |
// | Browser support   | Modern only         | Wider (IE too)       |
// | Progress tracking | Hard                | ✅ Easy               |

// 👉 If you’re building small apps, fetch is fine.
// 👉 If you’re building production apps (auth, retries, token handling, progress bars) → use axios.

// 🔹 1. Built-in vs External Library
// fetch → Native JS function, no need to install anything.
// axios → External library (npm install axios) with more features out of the box.

// 🔹 2. Response Handling
// Fetch:
// Does not reject on HTTP errors (e.g., 404, 500).
// You must check manually with res.ok.
fetch("/api")
  .then(res => {
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  })

// Axios:
// Automatically rejects on HTTP errors.
axios.get("/api")
  .then(res => console.log(res.data))
  .catch(err => console.log(err.response.status))

// 🔹 3. Data Parsing
// Fetch → You must call .json() (async step).
// Axios → Automatically transforms JSON response to res.data.

// 🔹 4. Request Configuration
// Fetch: Options object, a bit verbose.
fetch("/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Anu" })
});
// Axios: Cleaner & shorter.
// axios.post("/api", { name: "Anu" });

// 🔹 5. Timeout Support
// Fetch → No built-in timeout, need AbortController.
// Axios → Has timeout option built-in.

axios.get("/api", { timeout: 5000 });

// 🔹 6. Interceptors
// Fetch → No interceptors, you must manually wrap logic.
// Axios → Has interceptors (great for attaching auth tokens, logging, retrying).

axios.interceptors.request.use(config => {
  config.headers.Authorization = "Bearer token";
  return config;
});

// 🔹 7. Browser Compatibility
// Fetch → Not supported in older browsers (like IE).
// Axios → Works in all major browsers (uses XHR internally).

// 🔹 8. Upload/Download Progress
// Fetch → Limited support, harder for progress tracking.
// Axios → Supports progress tracking with onUploadProgress and onDownloadProgress.