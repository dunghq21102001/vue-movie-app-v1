import axios from "axios";
// ?api_key=f0ad1e71f8fc29fc75cff6a715b62d74
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFkMWU3MWY4ZmMyOWZjNzVjZmY2YTcxNWI2MmQ3NCIsInN1YiI6IjYzMWRmZGI1YzRmNTUyMDA5MTdiYWQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s25hrujbs23pR6UYDZeC_TM64F5GnBvYCcn-gjcP7TA'
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${token}`
    }
})