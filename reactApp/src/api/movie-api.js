export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
};

export const getMovie = id => {
    return fetch(
        `/api/movies/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
}

export const getUpcomingMovies = () => {
    return fetch(
        '/api/movies/upcoming',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
}


export const getTrendingMovies = () => {
    return fetch(
        '/api/movies/trending',{headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
}

export const getMovieCast = id => {
    return fetch(
        `/api/movies/${id}/cast`, {headers: {
            'Authorization' : window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
}

export const getMovieReviews = id => {
    return fetch(
        `/api/movies/${id}/reviews`, {headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
}

export const getGenres = () => {
    return fetch(
        `/api/genres`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    ).then(res => res.json());
}

export const getPeople = () => {
    return fetch(
        `/api/people`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    ).then(res => res.json());
}

export const getPerson = (id) => {
    return fetch(
        `/api/people/${id}`,{headers: {
            'Authorization': window.localStorage.getItem('token')
        }}
    ).then(res => res.json());
}