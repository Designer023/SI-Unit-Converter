class SIUnitConverter {
  constructor() {
    this.CONVERT_METRE_RATIO = {
          'mile' : 1609.344,
          'kilometre' : 1000,
          'kilo': 1000,
          'metre': 1,
          'yard' : 0.9144,
          'feet' : 0.3048
     }

     this.CONVERT_SECOND_RATIO = {
        'hour' : 3600,
        'minute': 60,
        'second': 1
      }

      this.CONVERT_MPS_RATIO = {
        'mph' : 0.44704,
        'kmph': 0.2777778,
        'mps': 1
      }
  }

    convert_distanceX_to_distanceY(value, unit_in, unit_out) {
      var ratio_in = this.CONVERT_METRE_RATIO[unit_in];
      var ratio_out = 1 / this.CONVERT_METRE_RATIO[unit_out];
      var value_as_m = (value * ratio_in) * ratio_out;
      return value_as_m;
     };

    convert_speedX_to_speedY(value, unit_in,unit_out) {
          var ratio_in = this.CONVERT_MPS_RATIO[unit_in];
          var ratio_out = 1 / this.CONVERT_MPS_RATIO[unit_out];
          var value_as_mps = (value * ratio_in) * ratio_out;
          return value_as_mps;
        };

    convertSHMToseconds(sec, min, hour) {
          var seconds = sec;
                if (min) {
                    seconds += min * this.CONVERT_SECOND_RATIO.minute;
                }

                if (hour) {
                    seconds += hour * this.CONVERT_SECOND_RATIO.hour;
                }
          return seconds;
        };
}

export default SIUnitConverter;
