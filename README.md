# Lecto

```
 npm run serve
```

## 🌱 Commit Convention

- 커밋 메시지 규칙

  - `commit convention`: `commit message`
  - 예시) `feat: Add login fn`

- 커밋 메시지 사전  
  <a>https://blog.ull.im/engineering/2019/03/10/logs-on-git.html</a>

| Tag Name  | Description                                                                                   |
| :-------- | :-------------------------------------------------------------------------------------------- |
| Feat      | 새로운 기능 추가                                                                              |
| Design    | CSS 등 사용자 UI 디자인 변경                                                                  |
| Style     | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                                         |
| Comment   | 필요한 주석 추가, 변경 및 삭제                                                                |
| Fix       | 버그 수정                                                                                     |
| Refactor  | 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우                 |
| Docs      | README.md 수정                                                                                |
| Rename    | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| Remove    | 파일을 삭제하는 작업만 수행한 경우                                                            |
| Test      | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| Chore     | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| !BREAKING | CHANGE 커다란 API 변경의 경우                                                                 |
| !HOTFIX   | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |

## 🪵 Branch Convention

- 각자 이름으로 브랜치를 만든다.
- 브랜치안에서 기능별로 세부 브랜치를 만든다.
- 본인 브랜치에 기능별로 Add - Commit - Push - Pull Request 의 과정을 거친다.
- 본인 브랜치에서 main branch로 Pull Request가 작성되면 다른 팀원이 Code Review를 한다.
- Code Review가 완료되고, 다른 팀원이 Approve 하면 Pull Request
