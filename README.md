# @musma/eslint-config

무스마 ESLint Config 입니다. Typescript를 사용하는 모든 프로젝트에서 사용하여 코딩 컨벤션을 유지하도록 합시다.

## 설치방법

1. 루트 디렉토리에 .npmrc 파일을 생성합니다. (주의! 루트 디렉토리입니다. 프로젝트내에서 하는게 아닙니다.)

```
vi ~/.npmrc
```

2. 루트 디렉토리의 .npmrc 파일에 아래의 내용을 넣습니다.
토큰 발급 방법은 https://musma.github.io/2019/09/30/github-package-registry.html

```
@musma:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={자신의토큰}
```

3. 프로젝트내에 .npmrc 파일 생성 (이미 있다면 패쓰!)

```
vi .npmrc
```

4. 프로젝트내에 .npmrc 파일에 아래 내용 추가

```
@musma:registry=https://npm.pkg.github.com/
```

5. @musma/eslint-config 의존성 설치

```
yarn add -D @musma/eslint-config
```

6. 프로잭트내에 `.eslintrc` 파일 생성(이미 있다면 패쓰!)

```
vi .eslintrc
```

7. 프로젝트내에 `.eslintrc` 파일에 아래의 내용을 추가합니다.

```
{
  "extends": ["@musma"]
}
```

## License

Open source [licensed as MIT](./LICENSE).
