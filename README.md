## HongHongAI

这是模仿DK的 [哄哄模拟器](https://hong.greatdk.com/) 做的开源免费版哄哄模拟器，大模型用的是 google 的 gemini，主打一个免费（每分钟60次调用），目前 gemini 还没有训练模型和微调（Fine-tuning），所以我用最原始的 prompt 来实现，主要参考 [宝玉老师](https://weibo.com/1727858283/ND9pOzB0K?refer_flag=1001030103_) 这版



## Tech Stack

HongHongChat is built on the following stack:

- [Next.js](https://nextjs.org/) – framework
- [Vercel AI SDK](https://sdk.vercel.ai/docs) – AI completions
- [Vercel](https://vercel.com) – deployments
- [TailwindCSS](https://tailwindcss.com/) – styles



## Environment Variables

You can control the website through environment variables.

| Name             | Description                                                  | Required |
| ---------------- | ------------------------------------------------------------ | -------- |
| `GEMINI_API_KEY` | Your API Key for GEMINI. You can get it from [here](https://makersuite.google.com/app/apikey). | **✔**    |
| `API_BASE_URL`   | Custom base url for GEMINI API. Click [here](https://github.com/babaohuang/GeminiProChat?tab=readme-ov-file#solution-for-user-location-is-not-supported-for-the-api-use) to see when to use this. | ❌        |



## Contributing

Here's how you can contribute:

- [Open an issue](https://github.com/johanazhu/honghongai/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/johanazhu/honghongai/pull) to add new features/make quality-of-life improvements/fix bugs.

## Buy me a coffee

If this repo is helpful to you, buy me a coffee,thank you very much!😄

<img src="https://s2.loli.net/2022/10/09/31kvp8HRJuoBCfc.jpg" height="300px" width="300px" />

## License

Licensed under the [MIT license](https://github.com/johanazhu/honghongai/blob/main/LICENSE.md).

