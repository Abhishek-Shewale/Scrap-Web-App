import axios from "axios";

const URL = "http://localhost:8080";

export const addProduct = async (data) => {
  try {
    return await axios.post(`${URL}/addproduct`, data);
  } catch (error) {
    console.log("Error while calling add product api", error);
  }
};

export const getProducts = async () => {
  try {
    return await axios.get(`${URL}/pricing`);
  } catch (error) {
    console.log("Error while calling getProducts api", error);
  }
};


export const getProduct = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log("Error while calling getProduct api", error)
  }
}

export const editProduct = async (product, id) => {
  try {
    return await axios.post(`${URL}/${id}`, product);
  } catch (error) {
    console.log("Error while calling editProduct api", error)
  }
}

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("Error while calling deleteProduct api", error)
  }
}




export const getUser = async (username) => {
  try {
    return await axios.get(`${URL}/${username}`);
  } catch (error) {
    console.log("Error while calling getUser api", error);
  }
};

export const editUser = async (username) => {
  try {
    return await axios.post(`${URL}/${username}`);
  } catch (error) {
    console.log("Error while calling editUser api", error);
  }
};
