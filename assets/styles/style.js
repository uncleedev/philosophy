import { StyleSheet } from "react-native";

export const defaultStyles =  StyleSheet.create({
    h1: {
        fontSize: 36,
        fontWeight: 'semibold',
        fontFamily: "Miltonian"
    },
    h2: {
        fontSize: 24,
        fontWeight: 'semibold',
        fontFamily: "Miltonian"
    },
    h3: {
        fontSize: 14,
        fontWeight: "medium",
        fontFamily: "Poppins"

    },
    h4: {
        fontSize: 16,
        fontWeight: "medium",
        fontFamily: "Miltonian"
    },
    p: {
        fontSize: 12,
        fontWeight: "regular",
        fontFamily: "Lora",
        opacity: 0.6
        
    },
    form: {
        width:  '100%',
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
        alignItems:  'center',
        gap: 35,
        marginTop: 66
      },
      input: {
        width: "100%",
        padding: 10,
        borderRadius: 10 
        
      },
      shadow: {
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2, 
        },
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 2
    }
})