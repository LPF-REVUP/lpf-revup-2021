<template lang="pug">
  v-container.pa-0(fluid)
    v-row.mb-6(
      no-gutters
    )
      v-col.page_header()
      v-col.page_header(
        cols="12"
        md="9"
      )
        v-container(fluid)
          v-row.mr-2.ml-2(
            justify="center" align-content="center"
          )
            //- Title
            div.mt-16
              h1.page_header_text 個人情報保護方針
      v-col.page_header()
    v-row.mb-6(
      no-gutters
    )
      v-col()
      v-col(
        cols="10"
        md="8"
      )
        v-container(fluid)
          v-row
            h3.chapter_header １.プライバシーポリシー
            div.body-1.chapter_text 当社は、当社が取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
          v-row
            h3.chapter_header ２.個人情報の安全管理
            p.body-1.chapter_text 当社は、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、当社の取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
          v-row
            h3.chapter_header ３.個人情報の取得等の遵守事項
          v-row
            p.body-1.chapter_text 当社による個人情報の取得、利用、提供については、以下の事項を遵守します。
          v-row
            h4.section_header (1) 個人情報の取得
          v-row
            p.body-2.section_text 当社は、本サービスの利用にあたって、ユーザーが外部サービスとの連携を許可した場合、以下の情報を当該外部サービスから取得します。
              ul.ml-2
                li.mt-2 外部サービスでユーザーが利用するID
                li.mt-2 その他外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報
          v-row
            h4.section_header (2) 個人情報の利用目的
          v-row
            p.body-2.section_text 当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
              ol.ml-2
                li.mt-2 本サイトの運営、維持、管理
                li.mt-2 本サイトを通じたサービスの提供及び紹介
                li.mt-2 本サイトの品質向上のためのアンケート
          v-row
            h4.section_header (3) 個人情報の提供等
          v-row
            p.body-2.section_text 当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
          v-row
            h3.chapter_header 4 .個人情報の利用目的の変更
            p.body-1.chapter_text 当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
          v-row
            h3.chapter_header ５.個人情報の第三者提供
            p.body-1.chapter_text 当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。
          v-row
            h3.chapter_header ６.個人情報の取扱いの改善・見直し
          v-row
            p.body-1.chapter_text 当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
          v-row
            h3.chapter_header ７.個人情報の廃棄
            p.body-1.chapter_text 当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
          v-row
            h3.chapter_header ８.お問合せ先
          v-row
            p.body-1.chapter_text linedevcom@gmail.com
      v-col()
</template>

<style lang="stylus">
.page_header
  background-color #00B900
  height: 200px
.page_header_text
  color #FFFFFF
.chapter_header
  font-weight: bold
  padding-top: 1em
  padding-bottom: 1em
.chapter_text
  padding-left: 2em
  padding-bottom: 1em
.section_header
  font-weight: bold
  padding-left: 1em
  padding-bottom: 1em
  padding-bottom: 1em
.section_text
  padding-left: 3em
  padding-bottom: 1em
</style>
