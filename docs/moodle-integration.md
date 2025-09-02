# Moodle Integration

## Overview

Moodle will host the educational content for Educado. The React Native app consumes Moodle data through its web services API, allowing content creators to manage courses separately from the mobile client.

## Setup

- Maintain a Moodle instance operated by the content team.
- Enable the [Moodle web services API](https://docs.moodle.org/dev/Using_web_services).
- Create a dedicated service user and generate tokens for API access.

## Accessing Content

1. The app authenticates with Moodle using the service token.
2. Course data is fetched through REST endpoints such as `/webservice/rest/server.php`.
3. Media assets (videos, images) should be stored in Moodle and referenced by URL.

## Synchronisation Strategy

- Cache downloaded lessons on the device for offline use.
- Use lightweight requests to respect limited bandwidth and hardware constraints.
- Schedule background updates when connectivity is available.

## Next Steps

Document available endpoints and payloads once the Moodle instance is configured. Include example requests for enrolling users and fetching course modules.

