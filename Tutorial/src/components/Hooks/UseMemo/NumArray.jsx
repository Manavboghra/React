import React from "react";

export const NumArray = new Array(30000000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelect: i===29999999,
  };
});

