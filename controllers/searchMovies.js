import axios from "axios";

const searchMovies = async (req, res) => {
  try {
    const { userQuery } = req.body;
    const search = userQuery;

    // Making the request to the Python API
    const response = await axios.post(`http://127.0.0.1:5000/search`, {
      search,
    });

    // Handling the API response
    if (response.status === 200) {
      const results = response.data; // Adjusted to get the actual movie list
      // console.log(results);
      return res.status(200).json({ message: "Success", results });
    } else {
      return res
        .status(response.status)
        .json({ message: "Unexpected error", results: [] });
    }
  } catch (error) {
    console.error("Error occurred during movie search:", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};

export default searchMovies;
