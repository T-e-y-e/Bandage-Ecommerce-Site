import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface WishlistItem {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
}

const storedWishlistItems = typeof window !== "undefined" && localStorage.getItem("wishlistItems");

const initialState: WishlistState = {
  wishlistItems: typeof storedWishlistItems === "string" ? JSON.parse(storedWishlistItems) : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const existingIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.wishlistItems[existingIndex] = {
          ...state.wishlistItems[existingIndex],
        };
        toast.info("Product already in wishlist", {
          position: "top-left",
        });
      } else {
        let tempProductItem: WishlistItem = {
          ...action.payload,
        };
        state.wishlistItems.push(tempProductItem);
        toast.success("Product added to Wishlist", {
          position: "top-left",
        });
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },


    removeFromWishlist(state, action: PayloadAction<WishlistItem>) {
      state.wishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload.id
      );

      toast.error("Product removed from wishlist", {
        position: "bottom-left",
      });

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
