<div align="center">
  <img src="https://cdn.nefusoft.cloud/0rK13.png" alt="Elaina the Ashen Witch" width="200"/>
</div>

<h1 align="center">✨ @elainaa/proxy ✨</h1>

<p align="center">
  A lightweight yet powerful proxy fetching library to bypass web restrictions, inspired by Elaina.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@elainaa/proxy"><img src="https://img.shields.io/npm/v/@elainaa/proxy.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/@elainaa/proxy"><img src="https://img.shields.io/npm/dt/@elainaa/proxy.svg" alt="NPM Downloads"></a>
</p>

---

`@elainaa/proxy` is a modern, promise-based HTTP client proxy. It's designed to help you fetch content from websites that might be otherwise inaccessible by routing requests through a pool of web proxy servers.

### 🚀 Features

*   **Simple & Intuitive API**: Get started in seconds with a clean and modern API.
*   **Flexible Server Selection**: Manually pick from a wide range of US and EU servers.
*   **Built-in Retry Mechanism**: Features a smart `.auto()` mode that automatically retries with a different server on failure.
*   **Multiple Usage Patterns**: Supports simple function calls, a client factory pattern, and even a drop-in replacement for `fetch`.

### 📦 Installation

Install the package using NPM or your favorite package manager:

```bash
npm install @elainaa/proxy
```

### 📖 API Reference & Usage

Here are the different ways you can use the library, from simplest to most advanced.

#### 1. Basic Usage (`proxy`)

The default export is a simple function that takes a URL and an optional options object. It returns the response body as a string.

```javascript
import proxy from '@elainaa/proxy';

// 1. Simple fetch (uses default us1 server)
const html1 = await proxy('https://example.com');

// 2. Fetch with specific server options
const options = { region: 'eu', serverId: 15 };
const html2 = await proxy('https://example.com', options);
```

#### 2. Client Factory (`createProxyClient`)

For applications making multiple requests with the same configuration, you can create a reusable client instance.

```javascript
import { createProxyClient } from '@elainaa/proxy';

// Create a client configured for the US server #7
const usClient = createProxyClient({ region: 'us', serverId: 7 });

// Reuse the client for multiple fetches
const page1 = await usClient.fetch('https://example.com/page1');
const page2 = await usClient.fetch('https://example.com/page2');
```

#### 3. Smart Auto Mode (`proxy.auto`)

Let the library handle server selection and retries for you. It will randomly pick a server from the specified region and retry on failure.

```javascript
import proxy from '@elainaa/proxy';

try {
  // Automatically select a random US server, with up to 3 retries on failure
  const options = { region: 'us', retries: 3 };
  const html = await proxy.auto('https:example.com', options);
  console.log('✅ Success!');
} catch (error) {
  console.error('❌ Failed after multiple attempts:', error);
}
```

#### 4. Drop-in Fetch Replacement (`createProxyFetch`)

For maximum flexibility, create a proxy-wrapped `fetch` function that behaves like the standard Web API `fetch`. This is useful for integrating with existing libraries that expect a `fetch`-compatible function.

```javascript
import { createProxyFetch } from '@elainaa/proxy';

// Create a proxied fetch function targeting US server #1
const nefuFetch = createProxyFetch({ region: 'us', serverId: 1 });

// Use it exactly like the standard fetch API
const response = await nefuFetch('https://example.com');

if (response.ok) {
  console.log('Status:', response.status);
  const html = await response.text();
  console.log(html.substring(0, 200));
}
```

### ⚙️ Configuration Options

The `options` object can contain the following properties:

| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `region` | `string` | `'us'` | The server region. Can be `'us'` or `'eu'`. |
| `serverId` | `number` | `1` | The server ID number, from 1 to 20. |
| `retries` | `number` | `2` | Number of retries for `.auto()` mode. |

### 🌐 Available Servers

You can choose any combination of the following regions and server IDs.

| Region US (`us`) | Region EU (`eu`) |
| :--- | :--- |
| US1 - US20 | EU1 - EU20 |

---

<p align="center">
  Happy fetching!
</p>
