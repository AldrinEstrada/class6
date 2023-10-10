import { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import { Image } from "expo-image";

export default function NasaInfo() {
    const [data, setData] = useState();

    const myAPI = "usaurUuIEWAxmGdfniMaVmdkT4GywyYwjcIFDPFc";
    const year = '2023';
    const month = '01';
    const day = '01'

    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const url = `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?&api_key=${myAPI}`;

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            console.clear();
            console.log(response);
            setData(response.data);
        }).catch(err => {
            console.log(err);
        });
    },[]);

    return(
        <>
            {
                data && data.map ((a, index) => {
                    return(
                        <View key={index}>
                            <View>
                                <Text>Image # {index + 1}</Text>
                                
                            </View>
                            <Text>{a.caption.toUpperCase()}</Text>
                            <View>
                                <Text>Date: {monthName[Number(a.date.slice(5,7))-1]} {Number(a.date.slice(8,10))}, {Number(a.date.slice(0,4))}</Text>
                                
                            </View>

                            <Image source={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${a.image}.png`} alt="" width={200} height={200}/>
                            <View>
                                <Text>Coordinates:</Text>
                                <Text>x: {a.centroid_coordinates.lat.toFixed(2)} y: {a.centroid_coordinates.lon.toFixed(2)}</Text>
                            </View>
                            
                        </View>
                    
                    )
                })
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        fontcolor: 'white'

    },
});
