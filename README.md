# Football League ⚽️👑
本サービスは、欧州5大リーグのサッカーの試合結果やチーム情報などを閲覧することができるWebサイトです。

ただ情報を閲覧できるだけではなく、お気に入りのチームやリーグを追加することもできます。

## 主要な使用技術
**フロントエンド**

- [TypeScript](https://www.typescriptlang.org/) (5.1.6)
- [React](https://react.dev/) (18.2.0)
- [React Router Dom](https://reactrouter.com/en/main) (6.14.1)
- [Axios](https://github.com/axios/axios) (1.1.2)
- [React Hook Form](https://react-hook-form.com/) (7.45.4)
- [React Tooltip](https://github.com/ReactTooltip/react-tooltip) (5.18.0)
- [React Card Flip](https://www.npmjs.com/package/react-card-flip) (1.2.0)
- [Tailwind CSS](https://tailwindcss.com/) (3.3.2)
- [Material-UI](https://mui.com/) (5.14.6)

**バックエンド**

- [PHP](https://www.php.net/manual/ja/index.php)(8.0.2)
- [Laravel](https://laravel.com/)(9.19)
- [Laravel Sanctum](https://readouble.com/laravel/8.x/ja/sanctum.html)(3.0)
- [Laravel Fortify](https://readouble.com/laravel/8.x/ja/fortify.html)(1.17)
- [Socialite](https://readouble.com/laravel/8.x/ja/socialite.html)(5.9)
- [Guzzle](https://readouble.com/laravel/9.x/ja/http-client.html)(7.2)

## インフラ構成図
![image](https://github.com/MiuraKeiya/laravel-react-soccer-spa/assets/122216142/b6abafbc-5f77-4e18-a232-90eef03e9229)

## 画面
**ログイン画面**

![スクリーンショット 2024-01-09 19.18.40.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/8f4995e6-029b-0d79-ca36-88883ebe2f94.png)

---

**入力時バリデーション**

![スクリーンショット 2024-01-09 20.09.16.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/903c10fe-9321-5e50-4979-c06bb8c91804.png)

---

**新規登録画面**

![スクリーンショット 2024-01-09 19.50.43.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/50230bdf-3fcd-c878-034b-161e94b2dd16.png)

---

**登録後の認証確認通知**

![スクリーンショット 2024-01-09 20.10.16.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/a839098c-6906-ce3a-6305-87c85cb5b53a.png)

---

**ホーム画面**

![スクリーンショット 2024-01-09 19.22.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/580d132c-f7d8-9789-37ce-cf2c35efc194.png)

---

**試合詳細画面**

試合の統計情報をゲージバーを使用して視覚的にわかりやすくしました。
![statistics.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/18de94f5-6201-2e72-af5b-0a85b733c419.gif)


各チームのフォーメーションを見やすく表示し、カーソルを合わせると選手の写真を確認することができます。
![formations.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/884be91b-c4d7-3acc-c5a8-15e320eb6c86.gif)


---

**順位表画面**

![スクリーンショット 2024-01-09 19.28.20.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/da3cc4db-debd-e27e-778a-1ef34d39cfbf.png)

---

**お気に入り追加**

検索時にスケルトンローディングを実装しユーザーの待ち時間を直感的に短くしています。
![favorites.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/b9998a42-d1d8-eba5-1e29-3f76b0536dac.gif)

---

**お気に入りはサイドバーから確認可能**

![スクリーンショット 2024-01-09 19.42.25.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/e6474019-ec58-b1fa-3b07-84a1451db417.png)

---

**チーム詳細画面**

![スクリーンショット 2024-01-09 19.44.00.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/9edca9a8-692c-92b0-9abb-5a3c21218cea.png)

---

**リーグ詳細画面**

![スクリーンショット 2024-01-09 19.45.53.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/13c1666f-2d91-fc4b-51b2-c11c2b931620.png)

---

**選手詳細画面**

![スクリーンショット 2024-01-09 19.48.47.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2851087/e63a3c2d-6af8-a1cc-3b72-046bc23873a2.png)

---
