import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const restEndpoint = "https://gorest.co.in/public/v2/users";

const Get = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(restEndpoint, {
        headers: {
          Authorization:
            "Bearer fb80864b3806a3083e93a1750bdf49e339416f5f9e07405e2a0859d8b0719c36",
          "Content-Type": "application/json",
        },
      });
      setData(response.data); // Assuming response.data is an array of users
      console.log(response.data);
    } catch (error: any) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Get Screen</Text>
      {data.length > 0 &&
        data.map((user) => <Text key={user.id}>{user.name}</Text>)}
    </View>
  );
};

export default Get;
