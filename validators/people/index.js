import { sanitize } from 'indicative'
import { messages, validatorInstance, sanitizeRules } from '../../utils'

export default {
    addPeople: async (req, res, next) => {
        const rules = {
            voters_id: 'required',
            first_name: 'required',
            last_name: 'required',
            positionId: 'required',
            electoralId: 'required',
            memberType: 'required',
            userId: 'required|integer',
        }

        let data = req.body
        sanitize(data, sanitizeRules)
        try {
            await validatorInstance.validateAll(data, rules, messages)
            next()
        } catch (e) {
            console.log('the people error', e)
            return res.status(400).json({
                message: e,
            })
        }
    },
}
