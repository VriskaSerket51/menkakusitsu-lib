import { DefaultResponse } from "../..";

export interface MealInfo {
    meals: string[];
}

export interface GetMealRequest {
    // when: string;
}

export interface GetMealResponse extends DefaultResponse {
    breakfast: MealInfo;
    lunch: MealInfo;
    dinner: MealInfo;
}

export interface PutMealRequest {
    breakfast: MealInfo;
    lunch: MealInfo;
    dinner: MealInfo;
}

export interface PutMealResponse extends DefaultResponse {
    breakfast: MealInfo;
    lunch: MealInfo;
    dinner: MealInfo;
}
