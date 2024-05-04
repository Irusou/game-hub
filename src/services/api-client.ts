import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "a88060ac70704db5a2fb07461b703fd2",
	},
});
