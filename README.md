# Rose Frontend

Next.js App Router ベースのフロントエンドプロジェクトです。

## プロジェクト構造

```
src/app/
├── (locale)/              # ルーティング専用
│   ├── page.tsx           # _features のコンポーネントを import して配置
│   ├── layout.tsx         # ルートレイアウト
│   └── globals.css
├── _features/             # 機能単位（Package by Feature）
│   ├── home/
│   │   └── HomePage.tsx
│   ├── auth/
│   │   └── LoginForm.tsx
│   └── dashboard/
│       └── DashboardCard.tsx
└── _components/           # 共通コンポーネント
    └── Button.tsx
```

## アーキテクチャ

### 責務の分離

| ディレクトリ | 責務 | 説明 |
|-------------|------|------|
| **(locale)/** | ルーティングのみ | `page.tsx` と `layout.tsx` を配置。`_features` のコンポーネントを import して配置するだけの薄いラッパー |
| **_features/** | 機能単位の責務 | 各ページの feature を管理。コンポーネント、サーバーアクションなどを定義 |
| **_components/** | 共通 UI | 複数 feature で共有するコンポーネント。`_features` から import される |

### 依存関係の方向

```
(locale) → _features → _components
```

- ルーティング層は feature を import するのみ
- feature は必要に応じて共通コンポーネントを import
- 循環依存は避ける

## Next.js ベストプラクティスとの整合性

| 観点 | 評価 |
|------|------|
| **Private Folders (`_`)** | `_features`, `_components` はルーティングから除外。Next.js 公式の [Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders) に準拠 |
| **Route Group `(locale)`** | 括弧付きフォルダで URL に影響せずグルーピング。将来の i18n（`/en`, `/ja`）拡張にも対応しやすい |
| **責務の分離** | ルーティング・機能・共通 UI の 3 層で明確に分離 |
| **Feature-based 構成** | スケーラビリティと保守性を考慮した構成 |

### 補足

- **`(locale)` の命名**: 多言語対応しない場合は `(routes)` や `(main)` の方が意図が伝わりやすい
- **`globals.css`**: ルートレイアウト用のため `(locale)/` に配置。ルーティング以外の責務だが、レイアウトと密接なためこの位置に配置

## Getting Started

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションを確認できます。

## スクリプト

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm start` | 本番サーバー起動 |
| `pnpm lint` | ESLint 実行 |
