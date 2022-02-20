import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "SECRET"
        })
    }
    async validate(payload: any) {
        console.log("🚀 ~ file: jwt.strategy.ts ~ line 14 ~ JwtStrategy ~ validate ~ payload", payload);

        return {
            id: payload.id,
            email: payload.email,
        }
    }
}