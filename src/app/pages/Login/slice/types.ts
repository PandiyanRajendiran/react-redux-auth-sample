/* --- STATE --- */
export interface UserSessionState {
  username: string;
  mail: string;
  loggedIn: boolean;
  image: string;
}

export type ContainerState = UserSessionState;
