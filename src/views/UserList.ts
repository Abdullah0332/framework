import { User, UserProps } from "../models/User";
import { ColelctionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends ColelctionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
