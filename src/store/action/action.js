// import ActionTypes from '../constant/constant';

// import axios from "axios";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../firebase";
import ActionTypes from "../constant/constant";




export async function fetchCartData(pageNumber) {
    const PAGE_SIZE = 10; // number of messages per page
    // const messagesRef = db.collection('cart');
    // const messagesRef = await collection(db, "cart");

    // const query = messagesRef.limit(PAGE_SIZE).offset((pageNumber - 1) * PAGE_SIZE);
    // const querySnapshot = await query.get();
    // const cartData = querySnapshot.docs.map((doc) => doc.data());
    // return cartData;
    // const collectionRef = getDocs(collection(db, 'cart'))

    // // Limit to the first 10 documents in the collection
    // collectionRef.then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });
    const myCollectionRef = collection(db, "cart");

    // Create a query with a limit of 10 documents
    const myQuery = query(myCollectionRef, limit(10).offset((pageNumber - 1) * PAGE_SIZE));

    // Retrieve the documents matching the query
    getDocs(myQuery).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    });
}
// export function $getChatroomDetail(
//     id,
//     chatRoomLastMessage,
//     allMessages
// ) {
//     return async (dispatch) => {
//         return new Promise(async (resolve, reject) => {
//             const messagesRef = firestore()
//                 .collection('chatrooms')
//                 .doc(id)
//                 .collection('messages');
//             try {
//                 let messagesQuerySnap = null;
//                 if (chatRoomLastMessage) {
//                     const lastMessageDoc = await messagesRef
//                         .doc(chatRoomLastMessage)
//                         .get();

//                     messagesQuerySnap = await messagesRef
//                         .where('type', 'in', ['default', 'loyalty'])
//                         .orderBy('sentAt', 'desc')
//                         .startAfter(lastMessageDoc)
//                         .limit(LOAD_SIZE_MESSAGES)
//                         .get();
//                 } else {
//                     messagesQuerySnap = await messagesRef
//                         .where('type', 'in', ['default', 'loyalty'])
//                         .orderBy('sentAt', 'desc')
//                         .limit(LOAD_SIZE_MESSAGES)
//                         .get();
//                 }

//                 let messages = [];
//                 for (
//                     let index = 0;
//                     index < messagesQuerySnap.docs.length;
//                     index++
//                 ) {
//                     let oneMessageDoc = messagesQuerySnap.docs[index];
//                     messages.push({
//                         id: oneMessageDoc.id,
//                         ...oneMessageDoc.data()
//                     });

//                     // translate remaining messages
//                     if (index + 1 === messagesQuerySnap.docs.length) {
//                         dispatch($translateMessages());
//                     }
//                 }
//                 if (allMessages) {
//                     allMessages = [...allMessages, ...messages];
//                 } else {
//                     allMessages = messages;
//                 }

//                 dispatch({
//                     type: CHAT_ROOM_MESSAGES,
//                     payload: {
//                         messages: allMessages,
//                         chatRoomLastMessage:
//                             messagesQuerySnap.docs.length > 0
//                                 ? messagesQuerySnap.docs[
//                                     messagesQuerySnap.docs.length - 1
//                                 ]?.id
//                                 : null
//                     }
//                 });
//                 resolve(allMessages);
//             } catch (error) {
//                 console.log('$getChatroomDetail - ', error);
//                 reject(error);
//             }
//         });
//     };
// }
