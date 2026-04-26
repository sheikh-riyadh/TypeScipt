{
  type Reverse = (value: string) => string | undefined;

  const reverseString: Reverse = (value) => {
    let arr = value.split("");
    let left = 0,
      right = value.length - 1;

      while(left< right){
        let temp = arr[left]
        arr[left]=arr[right]
        arr[right]=temp

        left++
        right--

      }

      return arr.join("")
  };

  console.log(reverseString("hello"));
}
