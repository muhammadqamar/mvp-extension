import { Box } from "@radix-ui/themes"
import * as Emoji from "quill-emoji"
import React, { useEffect, useState } from "react"
import ReactQuill from "react-quill"

import "quill-emoji/dist/quill-emoji.css"
import "react-quill/dist/quill.snow.css"

import { Quill } from "react-quill"

Quill.register("modules/emoji", Emoji)

const TextEditer = ({ setStap }) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (value !== "") {
      value
    }
  }, [setStap, value])

  return (
    <Box className="w-full !px-[10px] !pt-[12px] !pb-[50px] rounded-lg !bg-white relative border border-solid border-[#EBEBEF] overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: {
            container: [["emoji", "bold", "italic", "underline"], ["submit"]],
            handlers: {
              emoji: function () {},
              submit: function () {
                setStap(3)
              }
            }
          },
          "emoji-toolbar": true,
          "emoji-textarea": false,
          "emoji-shortname": true
        }}
      />
    </Box>
  )
}

export default TextEditer