Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

const arr = [{}];

console.log(arr.last());

const student = {
  name: "Raza",
  marks: [100, 23, 56, 78],
};

const totalMarks = student.marks.reduce((acc, currentValue) => {
  acc + currentValue;
}, 0);

console.log("totalMarks: ", totalMarks);

var reduce = function (nums, fn, init) {
  if (!nums.length) return init;

  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    acc = fn(acc, num);
  }

  return acc;
};

const totalMarksMyReduce = reduce(
  student.marks,
  (acc, currentValue) => {
    acc + currentValue;
  },
  0,
);

console.log("totalMarksMyReduce: ", totalMarksMyReduce);
