# Portfolio - 2018

My portfolio as of 2018. Unlike most of my other projects, both personal and commercial, this site is very basic. Therefore I have kept complexity to a minimum; there isn't even a build toolchain! Backend dependencies are handled with npm, and templates are written in Pug.

Browser support is roughly the last 2 versions of modern browsers only (Chrome, Firefox, Edge, Safari).

## Prerequisites

- Node 8.5.0+ (for MJS)

## Quick Guide

Install npm dependencies: `npm i`.

Copy `.env.example` to `.env` and edit as desired.

In development, start the server with `npm run dev`. This dev server will reload on change. This will also run a linter against your JS files.

In production, start the server with `npm run start`.
