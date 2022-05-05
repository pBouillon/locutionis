<h1 align="center">
  <a href="https://locutionis.vercel.app/">Locutionis</a>
</h1>

<p align="center">
    Small, online reference of figures of speech
</p>

<div align="center">
  <img
    alt="Locutionis homepage screenshot"
    src="https://user-images.githubusercontent.com/22640284/158055918-2573173e-8eac-440f-ad5b-8fcd111f6224.png"
    style="height: 400px;"/>
</div>

<hr />

[Locutionis](https://locutionis.vercel.app/) is a simple website on which french speakers can learn more about some figures of speech, their usages and where to find more about it.

## Contributing

Pull requests are welcome either to add more content or to improve the actual code quality.

For major changes, please [open an issue](https://github.com/pBouillon/locutionis/issues/new) first to discuss what you would like to change.

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

#### Setup

```bash
git clone https://github.com/pbouillon/locutionis.git
npm install
npm run dev
```

You can now navigate to [localhost:3000](http://localhost:3000/) and start coding in your favorite editor.

## Architecture

- **Hosting** - [Vercel](https://vercel.com/)
- **Styling**
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Framework** - [Svelte](svelte.dev/) with [SvelteKit](https://kit.svelte.dev/) using [TypeScript](https://www.typescriptlang.org/)
