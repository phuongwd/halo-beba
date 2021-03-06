import React from 'react';
import Realm from 'realm';
import { userRealmStore } from './userRealmStore';

export interface UserRealmContextValue {
    realm: Realm | null;
}

interface UserRealmProviderState {
    realm: Realm | null;
}

export const UserRealmContext = React.createContext<UserRealmContextValue>( {} as UserRealmContextValue );

export class UserRealmProvider extends React.PureComponent<object, UserRealmProviderState> {
    public state: Readonly<UserRealmProviderState> = {
        realm: null
    };

    constructor(props: object) {
        super(props);
        this.onRealmChange = this.onRealmChange.bind(this);
        this.openRealm();
    }

    private async openRealm() {
        const realm = await userRealmStore.openRealm();

        if (realm) {
            this.setState({realm});
            realm.addListener('change', this.onRealmChange);
        } else {
            console.warn('UserRealmProvider was not able to open realm');
        }
    }

    private onRealmChange() {
        this.forceUpdate();
    }

    public componentWillUnmount() {
        if (this.state.realm) {
            this.state.realm.removeListener('change', this.onRealmChange);
            
            if (!this.state.realm.isClosed) {
                this.state.realm.close();
            }
        }
    }

    public render() {
        const contextValue: UserRealmContextValue = {
            realm: this.state.realm,
        };

        return (
            <UserRealmContext.Provider value={contextValue}>{this.props.children}</UserRealmContext.Provider>
        );
    }
}

export const UserRealmConsumer = UserRealmContext.Consumer;