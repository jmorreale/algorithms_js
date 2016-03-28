function reverseStr(s) { 
   var r = ''; 
   for (var i = s.length -1; i >= 0; i--) {
      r += s[i];
    } 
   return r;
}

reverseStr("Andy");
