import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native"
import axios from "axios"


function Home() {
  const [tracks, setTracks] = useState([])
  const navigation = useNavigation()
  let SPOTIFY_CLIENT_ID='35c819195da44e8293a9e2bd2cb07dc1'
  let SPOTIFY_CLIENT_SECRET='88cdc39a2a274cb1af2461b22b50b5df'

  // Get access token
  const getToken = async () => {
    const auth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")

    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth}`,
        },
      }
    )

    return res.data.access_token
  }

  // Search trending songs (we'll use a static query like "top hits")
  const fetchTrendingSongs = async () => {
    const token = await getToken()

    const res = await axios.get(
      "https://api.spotify.com/v1/search?q=top%20hits&type=track&limit=10",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    setTracks(res.data.tracks.items)
  }

  useEffect(() => {
    fetchTrendingSongs()
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={[styles.btn, {
          width: 40, height: 40, borderRadius: 20,
          backgroundColor: "skyblue", alignItems: "center", justifyContent: "center"
        }]} onPress={() => navigation.navigate('DrawyerNavigation')}>
          <Text style={styles.btntext}>P</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "green", borderRadius: 9, height: 40 }]}>
          <Text style={styles.btntext}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "grey", borderRadius: 10 }]}>
          <Text style={styles.btntext}>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "grey", borderRadius: 10 }]}>
          <Text style={styles.btntext}>Podcasts</Text>
        </TouchableOpacity>
      </View>

      {/* Tracks List */}
      <View>
        <Text style={{ fontSize: 20, color: "white", paddingLeft: 10 }}>Trending Songs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 10 }}>
          {tracks.map((track) => (
            <View style={styles.card} key={track.id}>
              <Image
                source={{ uri: track.album.images[0].url }}
                style={{ width: 90, height: 90, borderRadius: 5 }}
              />
              <Text style={{ color: "white", textAlign: "center", marginTop: 5 }} numberOfLines={1}>
                {track.name}
              </Text>
              <Text style={{ color: "gray", fontSize: 12, textAlign: "center" }} numberOfLines={1}>
                {track.artists[0].name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 15,
    gap: 10
  },
  btn: {
    width: "auto",
    padding: 10,
  },
  btntext: {
    color: "black"
  },
  card: {
    height: 150,
    width: 100,
    margin: 13,
    alignItems: "center"
  }
})

export default Home
