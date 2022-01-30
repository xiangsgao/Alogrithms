package com.gao.basic_alogrithms;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;


/**
 * basic sorting algorithms
 */

public class SortedArray {

    public static void run() {
        int[] array = new int [] {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        int k = 2;
        System.out.println(Arrays.toString(sortKMessedArray(array, k)));
        array = new int [] {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        System.out.println(Arrays.toString(insertionSort(array)));
        array = new int [] {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        System.out.println(Arrays.toString(mergeSort(array)));
        array = new int [] {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        System.out.println(Arrays.toString(bubbleSort(array)));
        array = new int [] {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        System.out.println(Arrays.toString(quickSort(array, 0, array.length)));
    }

    /**
     * Given an array of integers arr where each element is at most k places away from its sorted position,
     * code an efficient function sortKMessedArray that sorts arr.
     * For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array
     * Analyze the time and space complexities of your solution.\
     * O(nlog(k))
     */
    static int[] sortKMessedArray(int[] arr, int k) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int i = 0 ; i <= k ; i++)
            pq.add(arr[i]); // 1,4,5

        int index = 0;
        for(int i = k + 1 ; i < arr.length; i++){
            arr[index++] = pq.remove(); //
            pq.add(arr[i]); //4,5,7
        }

        while(!pq.isEmpty()){
            arr[index++] = pq.remove();
        }
        return arr;
    }


    // O(n^2)
    public static int[] insertionSort(int[] arr){
        for(int i = 1; i < arr.length; i++){
            int j = i;
            while(j > 0 && arr[j - 1] > arr[j]){
                int temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
        return arr;
    }


    // O(nlogn)
    public static int[] mergeSort(int[] arr){
        if(arr.length == 1)
            return arr;

        int middle = (arr.length + 1) / 2;
        int[] a = new int[middle];
        int[] b = new int[arr.length - middle];

        int index = 0;
        while(index < a.length){
            a[index] = arr[index];
            index++;
        }

        int bIndex = 0;
        while (index < arr.length){
            b[bIndex] = arr[index];
            bIndex++;
            index++;
        }
        a = mergeSort(a);
        b = mergeSort(b);
        return merge(a, b);
    }

    // helper for merge
    public static int[] merge(int[] a, int[] b){
        List<Integer> c = new ArrayList<>();

        int aIndex = 0;
        int bIndex = 0;
        while(aIndex < a.length && bIndex < b.length ){
            int aElement = a[aIndex];
            int bElement = b[bIndex];
            if(aElement < bElement){
                c.add(aElement);
                aIndex++;
            }else{
                c.add(bElement);
                bIndex++;
            }
        }

        while(aIndex < a.length){
            c.add(a[aIndex++]);
        }

        while(bIndex < b.length){
            c.add(b[bIndex++]);
        }

        return c.stream().mapToInt(i->i).toArray();
    }


    // n^2
    public static int[] bubbleSort(int[] array){
        for(int i = 1 ; i < array.length; i++){
            for(int j = 0; j < array.length - 1; j++){
                int temp = array[j];
                if(temp > array[j+1]){
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }



    // O(n^2) but nlog(n) if pivoted properly
    public static int[] quickSort(int[] array, int low, int high){
        if(low < high){
            int pivot = partition(array, low, high);
            quickSort(array, low, pivot);
            quickSort(array, pivot + 1, high);
        }
        return array;
    }

    // helper for quick sort
    public static int partition(int[] arr, int low, int high){
        int pivot = arr[low];
        int leftWall = low;

        for(int i = low + 1; i < high; i++){
            if(arr[i] < pivot){
                int temp = arr[i];
                arr[i] = arr[leftWall];
                arr[leftWall] = temp;
                leftWall++;
            }
        }

        arr[leftWall] = pivot;
        return leftWall;

    }

}
