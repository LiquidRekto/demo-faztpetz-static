import { jwtDecode } from "jwt-decode";
import { SessionStorageUtils, StorageUtils } from "./storage.utils";
import type { IAccount, ITokenInfo } from "@/interfaces/Account";
import type { ITokenPayload } from "@/interfaces/JWT";
import type { ShopItem } from "@/interfaces/Items";

export class CommonUtils {
  static getUserEmail(): string | null {
    try {
      const tokenInfoStr = StorageUtils.getItem("tokenInfo");
      console.log(tokenInfoStr);
      const tokenInfo = JSON.parse(tokenInfoStr) as ITokenInfo;
      console.log(tokenInfo);
      console.log(tokenInfo.accessToken);
      const decodedAccessInfo = jwtDecode<ITokenPayload>(tokenInfo.accessToken);
      console.log(decodedAccessInfo);
      return decodedAccessInfo.sub;
    } catch (e) {
      return null;
    }
  }

  static addToCart(item: ShopItem): void {
    let obj = SessionStorageUtils.getItem("itemsInCart");
    let array =
      obj !== "" ? (JSON.parse(obj) as unknown as Array<ShopItem>) : [];
    if (array === null) {
      array = new Array<ShopItem>();
    }
    array.push(item);
    SessionStorageUtils.setItem("itemsInCart", JSON.stringify(array));
  }
}
