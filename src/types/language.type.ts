import { HaipaNode } from "../main/node";

export type Language = | 'ab' | 'aa' | 'af' | 'ak' | 'sq' | 'am' | 'ar'
	| 'an' | 'hy' | 'as' | 'en-au' | 'av' | 'ae' | 'ay' | 'az' | 'bm'
	| 'ba' | 'eu' | 'be' | 'bn' | 'bh' | 'bi' | 'bs' | 'br' | 'bg'
	| 'my' | 'ca' | 'en-ca' | 'ch' | 'ce' | 'ny' | 'zh' | 'cv' | 'kw'
	| 'co' | 'cr' | 'hr' | 'cs' | 'da' | 'dv' | 'nl' | 'dz' | 'en' | 'eo'
	| 'et' | 'ee' | 'fo' | 'fj' | 'fi' | 'fr' | 'ff' | 'gl' | 'gd' | 'ka'
	| 'de' | 'el' | 'gn' | 'gu' | 'ht' | 'ha' | 'he' | 'hz' | 'hi' | 'ho'
	| 'hu' | 'is' | 'io' | 'ig' | 'id' | 'ia' | 'ie' | 'iu' | 'ik' | 'ga'
	| 'it' | 'ja' | 'jv' | 'kl' | 'kn' | 'kr' | 'ks' | 'kk' | 'km' | 'ki'
	| 'rw' | 'rn' | 'ky' | 'kv' | 'kg' | 'ko' | 'ku' | 'kj' | 'lo' | 'la'
	| 'lv' | 'li' | 'ln' | 'lt' | 'lu' | 'lg' | 'lb' | 'gv' | 'mk' | 'mg'
	| 'ms' | 'ml' | 'mt' | 'mi' | 'mr' | 'mh' | 'mo' | 'mn' | 'na' | 'nv'
	| 'ng' | 'nd' | 'ne' | 'no' | 'nb' | 'nn' | 'ii' | 'oc' | 'oj' | 'cu'
	| 'or' | 'om' | 'os' | 'pi' | 'ps' | 'fa' | 'pl' | 'pt' | 'pa' | 'qu'
	| 'rm' | 'ro' | 'ru' | 'se' | 'sm' | 'sg' | 'sa' | 'sr' | 'sh' | 'st'
	| 'tn' | 'sn' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'nr' | 'es' | 'su'
	| 'sw' | 'ss' | 'sv' | 'tl' | 'ty' | 'tg' | 'ta' | 'tt' | 'te' | 'th'
	| 'bo' | 'ti' | 'to' | 'ts' | 'tr' | 'tk' | 'tw' | 'ug' | 'en-gb'
	| 'uk' | 'ur' | 'en-us' | 'uz' | 've' | 'vi' | 'vo' | 'wa' | 'cy'
	| 'wo' | 'fy' | 'x-default' | 'xh' | 'yi, ji' | 'yo' | 'za' | 'zu';

export type LanguageAttribute = (code: Language) => HaipaNode;