module.exports = {
  "calendar": [
    {
      "time": "8:00",
      "sessions": [
        {
          "nome": "Colazione",
          "inizio": "8:00",
          "fine": "9:00",
          "luogo": "Caffè degli specchi",
          "id": "162gs38dh"
        },
        {
          "nome": "Presentazione ESOF 2019",
          "inizio": "9:00",
          "fine": "10:00",
          "luogo": "Piazza Unità d'Italia",
          "id": "@263gs79"
        },
        {
          "nome": "FINE",
          "inizio": "10:00",
          "fine": "11:00",
          "luogo": "Piazza Unità d'Italia",
          "id": "@263gs79"
        }
      ]
    }
  ],
  "speakers": [
    {
      "nome": "Mario Rossi",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtk1nxU8tRLiskdV8Bl0sE7LG8fPT3pO8b_v5ZLdCPYkHmHUE&s",
      "intervento": "Colazione",
      "inizio": "8:00",
      "fine": "9:00",
      "desc": "Robe",
      "id": "27sghs$"
    },
    {
      "nome": "Mario Bianchi",
      "img": "https://cdn2.iconfinder.com/data/icons/avatar-profile/476/profile_avatar_contact_account_user_default-512.png",
      "intervento": "Presentazione ESOF 2019",
      "inizio": "9:00",
      "fine": "10:00",
      "desc": "Altre robe",
      "id": "37sshs$"
    },
    {
      "nome": "Giovanna Verdi",
      "img": "https://cdn2.iconfinder.com/data/icons/avatar-profile/429/contact_account_user_default_avatar_female-512.png",
      "intervento": "Fine",
      "inizio": "10:00",
      "fine": "11:00",
      "desc": "Caffe",
      "id": "77s@hs$"
    }
  ],
  "map": {
    "geojson": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "evento": "colazione"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.762092590332031,
              45.649268385921395
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "evento": "Inizio"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.759925365447998,
              45.646283314737836
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "evento": "fine"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              13.764474391937254,
              45.64815837802974
            ]
          }
        }
      ]
    }
  }
}