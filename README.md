# NiceChunk NCFM

NCFM is the NiceChunk Fourier Model research page for chain-readable 3D game assets.

## Official Links

Website: [https://nicechunk.com/ncfm/](https://nicechunk.com/ncfm/)

GitHub: [https://github.com/nicechunk/nicechunk-ncfm](https://github.com/nicechunk/nicechunk-ncfm)

## Project Overview

This repository contains the focused NCFM browser surface. It demonstrates how a 3D game item can be represented as compact Fourier/function code that is readable from chain data and deterministically reconstructed by the client.

The page is intentionally separated from the full NiceChunk web client so reviewers can inspect the NCFM concept, browser source, local VOX import path, and public documentation boundary without scanning unrelated gameplay or deployment code.

## What It Demonstrates

- A compact NCFM payload shape for function-defined 3D items.
- Deterministic reconstruction from function parameters instead of external GLB files, mutable JSON, or IPFS gateway dependencies.
- A browser visual lab that shows XY Fourier drawing, Z thickness intersection, and final voxel output.
- Optional local `.vox` import through the shared public VOX parser.
- A public safety boundary with no private keys, deployment scripts, server credentials, or upload endpoint.

## Repository Layout

- `ncfm/index.html`: page shell, content structure, and reviewable public copy.
- `ncfm/ncfm.js`: NCFM reconstruction logic, canvas stages, local VOX import, and payload preview.
- `ncfm/style.css`: page layout, responsive presentation, and NCFM-specific visual styling.
- `src/vox/ncm.js`: shared MagicaVoxel parser used by the local import path.
- `src/i18n.js`, `src/site-ui.js`, `src/site-header.css`: shared public UI helpers needed by the page.
- `public/`: icons, locale dictionaries, public mainnet index, and media used by the page shell.

## Development Workflow

```bash
npm install
npm run build
npm run dev
```

Open `http://localhost:5173/ncfm/` during local development.

## Review Notes

NCFM is a research and presentation surface. It should not be described as a finalized on-chain asset standard until codec rules, verifier hashes, account storage rules, and compatibility requirements are specified and reviewed.

Runtime screenshots or production claims should come from the official website or a local build from this repository.

## License

Apache-2.0. See `LICENSE` and `NOTICE`.
