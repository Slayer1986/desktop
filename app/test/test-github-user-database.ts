import { GitHubUserDatabase } from '../src/lib/dispatcher/github-user-database'

export default class TestDatabase extends GitHubUserDatabase {
  public constructor() {
    super('TestGitHubUserDatabase')
  }

  public async reset(): Promise<void> {
    await this.delete()
    await this.open()
  }
}