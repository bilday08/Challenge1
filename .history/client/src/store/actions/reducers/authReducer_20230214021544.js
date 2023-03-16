const initState = {
    isLoggedIn: false,
    token: null
}

const authReducer = (stare = initState, action) => {
    switch (action.type) {

        default:
            return stare;
    }
}

export default authReducer