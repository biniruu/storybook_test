module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended', // 웹 접근성 관련 jsx 규칙
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, you should enable this
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true }, // JSX 파싱을 위해 필요
    ecmaVersion: 'latest',
    requireConfigFile: false, // "no babel config file detected for ..." 에러 해결을 위해 필요
    sourceType: 'module', // 모듈 시스템 사용 시 필요
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  root: true, // 해당 설정 파일이 root 임을 명시하는 옵션. true라면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    camelcase: ['error', { properties: 'never' }],
    'comma-dangle': 'off',
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: false }],
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'generator-star-spacing': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input'],
        depth: 1,
      },
    ], // 기본 html 태그가 아닌 custom component에서 웹 접근성 관련 에러 발생 방지
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-nested-ternary': 'warn', // 중첩 삼항 연산자 금지
    'no-new-object': 'error',
    'no-undef': 'off', // 함수 시그니처 작성 허용
    'no-underscore-dangle': 'warn', // 변수명 앞에 언더바를 붙일 수 있도록 허용 (e.g. _foo)
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto', // delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
        parser: 'flow',
      },
      // {
      //   usePrettierrc: false, // vscode-prettier 익스텐션이 .prettierrc를 읽기 때문에 이 옵션을 true로 설정해도 소용없음
      // },
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // 'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-no-useless-fragment': 'warn', // 불필요한 fragment 금지
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/jsx-no-bind': [
      'error',
      {
        allowFunctions: true,
      },
    ], // 함수를 props로 넘길 수 있도록 허용
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/self-closing-comp': ['warn', { component: true, html: false }],
    'react/static-property-placement': ['error', 'static public field'], // defaultProps를 클래스 내부에 정의하도록 허용
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': 'off', // allow debugger during development
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'], // react 사용 시 활성화 필요. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
      },
    },
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
}
