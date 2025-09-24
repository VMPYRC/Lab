# Git

- version control system
- currently using Git for Windows

## Resources

- https://www.w3schools.com/git/default.asp
- https://git-scm.com/

# Workflow

1. Create a branch `git branch <name>`
2. Publish the branch
3. Edits, updates
4. Stage changes
5. Commit `git commit -m "message here"`
6. Create a Pull Request
7. Review changes
8. Merge Pull Request
9. Delete branch `git branch -d <name>`

# Commands

## Git General

|  Type   |           Command            | Note                                                                                                                                                                              |
| :-----: | :--------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version |       `git --version`        | - show git version                                                                                                                                                                |
|  Help   |         `git --help`         | - command manual<br>- guides and concepts: `git help -g`<br>- all: `git help --all`<br>- quick summary of options: `git <command> -h`<br>- specific command: `git help <command>` |
| Update  | `git update-git-for-windows` | - `git update` has been deprecated<br>- update git                                                                                                                                |

## Git Config

- Most commands will use `--global` for convenience

### Config Levels

| Order of Precedence | Level  |     Note     | `git config` |
| :-----------------: | :----: | :----------: | ------------ |
|          1          | Local  | Current repo | `--local`    |
|          2          | Global | Current user | `--global`   |
|          3          | System |  All users   | `--system`   |

### Commands

|    Type     |                                                          Command                                                           | Note                                                                                                                                                          |
| :---------: | :------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    List     |                                                `git config --global --list`                                                | - view all global configs                                                                                                                                     |
| Core Editor |                              `git config --global core.editor "codium --wait" --replace-all`                               | - set `VS Codium` as default editor<br>- see other editors [here](https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config)<br>- unset with |
| Core Editor |                                      `git config --show-origin --get-all core.editor`                                      | - to see all defined core.editor values<br>- if there are a lot of core.editor values, edit the files listed                                                  |
| Core Editor | `git config --unset core.editor`<br>`git config --global --unset code.editor`<br>`git config --system --unset core.editor` | - unset all core.editors in local, global, and system-wide                                                                                                    |
|  User Name  |                                        `git config --global user.name "Your Name"`                                         | - change user name                                                                                                                                            |
| User Email  |                                     `git config --global user.email "name@example.com`                                     | - change user email                                                                                                                                           |
|   Branch    |                                       `git config --global init.defaultBranch main`                                        | - sets default branch name for new repositories to `main`                                                                                                     |

## Folder Management

|   Type   |      Command       | Note                                                                 |
| :------: | :----------------: | -------------------------------------------------------------------- |
| Current  |       `pwd`        | - shows current folder                                               |
|   List   |        `ls`        | - list files in folder<br>- `ls -a` shows hidden and ignored folders |
|  Create  | `mkdir foldername` | - create a new folder with `foldername`                              |
| Navigate |  `cd foldername`   | - changes working directory to `foldername`                          |

## Start / Staging

|    Type    |                    Command                     | Note                                                |
| :--------: | :--------------------------------------------: | --------------------------------------------------- |
| Initialize |                   `git init`                   | - initialize git in the folder                      |
| Stage File |                `git add <file>`                | - stage a file                                      |
| Stage All  | `git add --all`<br>`git add -A`<br>`git add .` | - stage all changes                                 |
|  Unstage   |         `git restore --staged <file>`          | - unstage a file                                    |
|   Status   |                  `git status`                  | - show branch<br>- show tracked and untracked files |

## Cloning

- Origin = where we have read+write access (our own version)
- Upstream = read-only access (the original version)

|    Type    |               Command               | Note                                         |
| :--------: | :---------------------------------: | -------------------------------------------- |
|   Clone    |         `git clone <link>`          | - create a local copy of a remote repository |
|   Remote   |           `git remote -v`           | - show the origin and upstream               |
|   Rename   | `git remote rename origin upstream` | - renames the `origin` to `remote`           |
| Add Origin |   `git remote add origin <link>`    | - adds origin link                           |

## Stash

- To save uncommitted changes and return to a clean working directory
- To quickly switch tasks, without committing
- Stashed changes are saved on top of a `stack`, with the most recent at the top

|              Type               |                      Command                      | Note                                                                                   |
| :-----------------------------: | :-----------------------------------------------: | -------------------------------------------------------------------------------------- |
|              List               |                 `git stash list`                  | - list all stashes                                                                     |
|              Stash              |                    `git stash`                    | - stash changes                                                                        |
|          Show Changes           |                 `git stash show`                  | - show what was changed in the latest stash<br>- full differences: `git stash show -p` |
|        Stash - Untracked        | `git stash -u`<br>`git stash --include-untracked` | - stash changes, untracked files too                                                   |
|             Message             |           `git stash push -m "message"`           | - stash changes with a message                                                         |
|             Branch              |          `git stash branch <branchname>`          | - create branch from a stash<br>- example: `git stash branch new-feature stash@{0}`    |
|          Apply Latest           |                 `git stash apply`                 | - restore the latest stashed changes                                                   |
|         Apply Specific          |            `git stash apply stash@{1}`            | - restore a specific stash                                                             |
| Apply Latest, Remove from Stack |                  `git stash pop`                  | - restore the latest stashed changes<br>- remove it from the stack                     |
|         Delete Specific         |            `git stash drop stash@{0}`             | - delete a specific stash                                                              |
|           Delete All            |                 `git stash clear`                 | - delete all stashes                                                                   |

## Log

|     Type     |             Command             | Note                                                                                                     |
| :----------: | :-----------------------------: | -------------------------------------------------------------------------------------------------------- |
|   History    |            `git log`            | - view commit history<br>- shorter: `git log --oneline`                                                  |
|     Stat     |        `git log --stat`         | - what changed in each commit                                                                            |
|    Authot    |    `git log --author="NAME"`    | - only from specific author                                                                              |
|    Recent    | `git log --since="2 weeks ago"` | - recent commits                                                                                         |
| Branch Graph |        `git log --graph`        | - ASCII graph of branch history<br>- shorter: `git log --graph --oneline`<br>- `q` to exit log/diff view |

## Commits

- Keep commit first-line messages short
- Use the imperative mood (`Update` feature, not `Updated` feature)
- Describe `WHY` the change was made, not only `WHAT` changed
- Finish the sentence:
  - If applied, this commit will... (your message here)

|          Type          |                    Command                    | Note                                                                                                                                                                |
| :--------------------: | :-------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        Details         |              `git show <commit>`              | - show commit details                                                                                                                                               |
|      See Changes       |                  `git diff`                   | - see unstaged changes                                                                                                                                              |
|      See Changes       |              `git diff --staged`              | - see staged changes                                                                                                                                                |
|    Compare Commits     |        `git diff <commit1> <commit2>`         | - compare two commits                                                                                                                                               |
|       Commit All       |         `git commit -a -m "message"`          | - commit all tracked changes with a one-line message<br>- skips staging                                                                                             |
|     Commit Staged      |        `git commit -m "message here"`         | - commit staged changes with a one-line message                                                                                                                     |
|     Message - Long     |                 `git commit`                  | - default editor will open so you can write a multi-line message<br>- first line = short summary<br>- second line = blank<br>- next lines = details for the message |
|         Empty          | `git commit --allow-empty -m "Start project"` | - empty commit                                                                                                                                                      |
|    Previous Message    |            `git commit --no-edit`             | - use previous commit message<br>- no editor                                                                                                                        |
|   Amend - Add Staged   |        ` git commit --amend --no-edit`        | - quickly add staged changes to last commit<br>- use previous commit message                                                                                        |
| Amend - Change Message |  `git commit --amend -m "Corrected message"`  | - fix the last commit message                                                                                                                                       |

## Branches

- like a parallel universe/timeline, that doesn't affect the main project
- keep each branch focused on a single purpose / feature
- regularly merge
- delete unused branches

|  Type  |                      Command                       | Note                           |
| :----: | :------------------------------------------------: | ------------------------------ |
| Status |                    `git status`                    | - see current branch           |
|  List  |                    `git branch`                    | - list all branches            |
|  New   |                `git branch <name>`                 | - create a new branch          |
| Switch |    `git checkout <name>`<br>`git switch <name>`    | - switch to a branch           |
| Switch | `git checkout -b <name>`<br>`git switch -b <name>` | - switch to a branch           |
| Delete |               `git branch -d <name>`               | - delete a branch (not merged) |
| Rename |         `git branch -m old-name new-name`          | - rename a branch              |

### Permanent Branches

1. main / master / stable
2. develop / dev

### Temporary Branches - Use Descriptive Names

|              Prefix              |                Example                |            Usage             |
| :------------------------------: | :-----------------------------------: | :--------------------------: |
|       `feature` or `feat`        |         `feature/login-page`          |   to develop new features    |
| `experiment` or `junk` or `test` |        `experiment/new-layout`        |     to try out new ideas     |
|   `improvement` or `refactor`    |   `improvement/update-dependencies`   | enhancements, optimizations  |
|        `bugfix` or `bug`         |         `bugfix/header-crash`         |         to fix bugs          |
|             `hotfix`             | `hotfix/security-vulnerability-patch` |       for urgent fixes       |
|            `release`             |           `release/v1.2.3`            | to prepare for a new release |
|             `merge`              |    `merge/combined-device-support`    |  to resolve merge conflicts  |

## Merging

|     Type     |       Command        | Note                                                                                                                                                                                                         |
| :----------: | :------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    Merge     |     `git merge`      | - merge a branch into current branch<br>1. switch into the branch you want to merge into: `git switch main`<br>2. merge the current branch (main) with another branch (fixed-issue): `git merge fixed-issue` |
| Merge Commit | `git merge --no-ff`  | - always create a merge commit<br>- no fast-forward merge                                                                                                                                                    |
|   Combine    | `git merge --squash` | - combine changes into a single commit                                                                                                                                                                       |
|    Abort     | `git merge --abort`  | - abort a merge in progress                                                                                                                                                                                  |

## Pull, Push

| Type |          Command           | Note                       |
| :--: | :------------------------: | -------------------------- |
| Pull | `git pull origin <branch>` | - pull changes from origin |
| Push | `git push origin <branch>` | - push changes to origin   |

## Tagging

|       Type       |                                         Command                                         | Note                                                   |                                    Example                                    |
| :--------------: | :-------------------------------------------------------------------------------------: | ------------------------------------------------------ | :---------------------------------------------------------------------------: |
|       List       |                                        `git tag`                                        | - list tags                                            |                                                                               |
|     Details      |                                  `git show <tagname>`                                   | - show tag details                                     |                                `git show v1.0`                                |
|  Create Simple   |                                   `git tag <tagname>`                                   | - create tag with simple name                          |                                `git tag v1.0`                                 |
| Create Annotated |                           `git tag -a <tagname> -m "message"`                           | - create annotated tag with author, date, message      |                  `git tag -a v1.0 -m "Version 1.0 release"`                   |
| Commit-Specific  |                            `git tag <tagname> <commit-hash>`                            | - tag a specific commit                                |                            `git tag v1.1 1a2b3c4d`                            |
|  Push - Single   |                               `git push origin <tagname>`                               | - push a single tag                                    |                            `git push origin v1.0`                             |
|    Push - All    |                                    `git push --tags`                                    | - push all tags                                        |                                                                               |
|   Delete Local   |                                 `git tag -d <tagname>`                                  | - delete a tag locally                                 |                               `git tag -d v1.0`                               |
|  Delete Remote   |                        `git push origin --delete tag <tagname>`                         | - delete a tag from the remote repository              |                      `git push origin --delete tag v1.0`                      |
|       Move       | `git tag -f <tagname> <new-commit-hash>`<br>then<br>`git push --force origin <tagname>` | - move tag to a different commit and update the remote | `git tag -f v1.0 <new-commit-hash>`<br>then<br>`git push --force origin v1.0` |

## Other

| Type | Command | Note |
| :--: | :-----: | ---- |
|      |         |      |
|      |         |      |
