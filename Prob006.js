/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(a, b) {
    let m = a.length, n = b.length;
    let even = (m+n)%2 ? false : true;
    let arr = [];
    let i = 0, j = 0, k = 0; 
    while(i < m && j < n &&  k < m + n){
        if(a[i] <= b[j]){
            arr[k++] = a[i++]; 
        } else{
            arr[k++] = b[j++]
        }
    }
    if(j==n){
        while(i < m){
            arr[k++] = a[i++]; 
        }
    }
    if(i == m){
        while(j < n){
            arr[k++] = b[j++]; 
        }
    }
    console.log(arr)
    if(even){
        console.log(arr,)
        return (arr[(m+n)/2] + arr[Math.floor((m+n-1)/2)]) / 2;
    } else{
        return arr[(m+n-1)/2]
    }
};