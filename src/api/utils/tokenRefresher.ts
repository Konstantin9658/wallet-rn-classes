import {JwtWithRefreshResponse} from 'api/backend/index.schemas';
import {postApiAccountRefresh} from 'api/backend';

class TokenRefresher {
  private isRefreshing = false;
  private refreshPromise = Promise.resolve<JwtWithRefreshResponse | null>(null);

  getIsRefreshing() {
    return this.isRefreshing;
  }

  getRefreshPromise() {
    return this.refreshPromise;
  }

  refresh(token: string) {
    if (this.isRefreshing) {
      return this.refreshPromise;
    }

    this.isRefreshing = true;
    this.refreshPromise = postApiAccountRefresh({token})
      .catch(() => null)
      .finally(() => {
        this.isRefreshing = false;
      });

    return this.refreshPromise;
  }
}

export const tokenRefresher = new TokenRefresher();
