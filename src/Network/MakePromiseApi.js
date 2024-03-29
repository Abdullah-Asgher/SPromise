// import {ToastAndroid} from 'react-native';

// const url = 'https://snappromise.com:8080/savePromise';

// const MakePromiseApi = async (
//   expiryDate,
//   IsTimeBound,
//   promiseGoal,
//   promiseMediaU,
//   PromiseID,
//   promiseType,
//   promisee,
//   promisor,
//   RatingImapect,
//   LinkDin,
//   Twitter,
//   startDate,
//   status,
//   paymentAmount,
//   paymentStatus,
//   PromiseReward,
//   visibility,
// ) => {
//   // console.log(expiryDate, IsTimeBound, promiseGoal, promiseMediaU, PromiseID, promiseType,promisee, promisor, RatingImapect, LinkDin, Twitter, startDate, status, paymentAmount, paymentStatus, PromiseReward, visibility, 'Api Calling');

//   const requestBody = {
//     expiryDate: expiryDate,
//     isTimeBound: IsTimeBound,
//     promiseGoal: promiseGoal,
//     promiseMediaURL: promiseMediaU,
//     promiseRequestID: PromiseID,
//     promiseType: promiseType,
//     promisee: promisee,
//     promisor: promisor,
//     ratingImpact: RatingImapect,
//     shareonLinkedIn: LinkDin,
//     shareonTwitter: Twitter,
//     startDate: startDate,
//     status: status,
//     userPromisePayment: paymentAmount !== null ? {
//       paymentAmount: paymentAmount,
//       PaymentStatus: paymentStatus,
//     }: null,
//     // userPromiseReward: PromiseReward,
//     visibility: visibility,
//     userPromiseReward: PromiseReward !== null ? { rewardPoints: PromiseReward } : null,
//   };

//   console.log(requestBody, "Request body: ")

//   try {
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'text/plain',
//       },
//       body: JSON.stringify(requestBody),
//     });

//     const rresult =  result;
//     console.log(result);
//     return rresult.code;

//     // return result.code;
//   } catch (error) {
//     console.error('Error during API call:', error);
//     // Handle the error as needed
//   }
// };

// export default MakePromiseApi;

import axios from 'axios';
import { ToastAndroid } from 'react-native';

const url = 'https://snappromise.com:8080/savePromise';

const MakePromiseApi = async (
  expiryDate,
  IsTimeBound,
  promiseGoal,
  promiseMediaU,
  PromiseID,
  promiseType,
  promisee,
  promisor,
  RatingImapect,
  LinkDin,
  Twitter,
  startDate,
  status,
  paymentAmount,
  paymentStatus,
  PromiseReward,
  visibility,
) => {
  const requestBody = {
    expiryDate: expiryDate,
    isTimeBound: IsTimeBound,
    promiseGoal: promiseGoal,
    promiseMediaURL: promiseMediaU,
    promiseRequestID: PromiseID,
    promiseType: promiseType,
    promisee: promisee,
    promisor: promisor,
    ratingImpact: RatingImapect,
    shareonLinkedIn: LinkDin,
    shareonTwitter: Twitter,
    startDate: startDate,
    status: status,
    userPromisePayment: paymentAmount !== null ? {
      paymentAmount: paymentAmount,
      PaymentStatus: paymentStatus,
    } : null,
    visibility: visibility,
    userPromiseReward: PromiseReward !== null ? { rewardPoints: PromiseReward } : null,
  };

  console.log(requestBody, "Request body: ");

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
    });

    console.log(response.data);
    return response.data.code;
  } catch (error) {
    console.error('Error during API call:', error);
    // Handle the error as needed
    // Example: ToastAndroid.show('Failed to make promise', ToastAndroid.SHORT);
  }
};

export default MakePromiseApi;
