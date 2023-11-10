Use vercel deploy
1-ish
vercel cli ni ornatamiz
```npm i -g vercel```

2-ish
vercel.json fayl yasab olamiz
``` touch vercel.json ```

3-ish
vercel.json ga
```
{
  "version": 2,
  "builds": [
    {
      "src": "dist/main.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/main.js"
    }
  ]
}
```
yozib olamiz


4-ish vercelga login qilamiz


```vercel login```

5-ish projectni build qilamiz

``` npm run build ```


6-ish projectni deploy qilamiz

```vercel --prod```

https://deploy-test-nest-vercel-ff47rzpvi-iamitachiuchiha.vercel.app/api/blog

