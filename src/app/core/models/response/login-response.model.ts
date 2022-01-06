import { AppToken } from './../app-token.model';
import { LoggedInUser } from '@app/core/models/logged-in-user.model';
import { User } from 'src/app/core/models/user.model';
export interface LoginResponse {
    user:         User;
    token:        string;
    loggedInUser: LoggedInUser;
    app_token:    AppToken;
	newUser?:	  boolean;	
}