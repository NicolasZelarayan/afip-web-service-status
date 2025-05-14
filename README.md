# afip-server-status-api

This project is a REST API that provides an endpoint to retrieve the server status of the AFIP (Administración Federal de Ingresos Públicos) using the Afip SDK.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd afip-server-status-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoint

- **GET /status**: Returns the current server status of AFIP.

### Example Request
```
GET http://localhost:3000/status
```

### Example Response
```json
{
  "status": "online",
  "timestamp": "2023-10-01T12:00:00Z"
}
```

## License

This project is licensed under the MIT License.