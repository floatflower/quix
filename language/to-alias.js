const _type = require('./type');

module.exports = (type) => {
    switch (type) {
        case _type.EN: return 'en';
        case _type.AR: return 'ar';
        case _type.SQ: return 'sq';
        case _type.BG_BG: return 'bg_BG';
        case _type.CA: return 'ca';
        case _type.ZH_CN: return 'zh_CN';
        case _type.ZH_TW: return 'zh_TW';
        case _type.HR: return 'hr';
        case _type.CS_CZ: return 'cs_CZ';
        case _type.DA_DK: return 'da_DK';
        case _type.NL_NL: return 'nl_NL';
        case _type.FI: return 'fi';
        case _type.FR_FR: return 'fr_FR';
        case _type.DE_DE: return 'de_DE';
        case _type.EL: return 'el';
        case _type.HE_IL: return 'he_IL';
        case _type.HU_HU: return 'hu_HU';
        case _type.ID_ID: return 'id_ID';
        case _type.IT_IT: return 'it_IT';
        case _type.JA: return 'ja';
        case _type.KO_KR: return 'ko_KR';
        case _type.NB_NO: return 'nb_NO';
        case _type.FA_IR: return 'fa_IR';
        case _type.PL_PL: return 'pl_PL';
        case _type.PT_PT: return 'pt_PT';
        case _type.PT_BR: return 'pt_BR';
        case _type.RO_RO: return 'ro_RO';
        case _type.RU_RU: return 'ru_RU';
        case _type.SL_SL: return 'sl_SL';
        case _type.ES_ES: return 'es_ES';
        case _type.SV_SE: return 'sv_SE';
        case _type.TH: return 'th';
        case _type.TR_TR: return 'tr_TR';
        case _type.UK: return 'uk';
    }
}