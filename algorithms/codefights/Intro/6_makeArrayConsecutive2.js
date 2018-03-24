// statues = [6, 2, 3, 8];
// makeArrayConsecutive2(statues) = 3, [4,5,7]

function makeArrayConsecutive2(statues) {
    var max = Math.max.apply(null, statues);
    var min = Math.min.apply(null, statues);
    return max - (min + (statues.length - 1));
};

// single liner
function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
};

//
function makeArrayConsecutive2(statues) {
        function sort(a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
        }
        statues.sort(sort);
        var statueI = 0;

        for (var i = 1; i < statues.length; i++) {
                var a = statues[i];
                var b = statues[i - 1];
                if (b + 1 !== a) {
                        statueI += a - b - 1;
                }
        }
        return statueI;
};

function makeArrayConsecutive2(sequence) {
    var min = sequence[0];
    var max = sequence[0];
    sequence.forEach(n => {
        min = Math.min(n, min);
        max = Math.max(n, max);
    });

    return max - min + 1 - sequence.length;
}
